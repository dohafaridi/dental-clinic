import CMSPage from '../models/cmsPage';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all cmsPages
 * @param req
 * @param res
 * @returns void
 */
export const getCMSPages = (req, res) =>
  CMSPage.find()
    .sort('-dateAdded')
    .exec(
      (err, cmsPages) =>
        (err ? res.status(500).send(err) : res.json({ cmsPages }))
    );

/**
 * Get a single cmsPage
 * @param req
 * @param res
 * @returns void
 */
export const getCMSPage = (req, res) =>
  CMSPage.findOne({ slug: req.params.slug }).exec(
    (err, cmsPage) => (err ? res.status(500).send(err) : res.json({ cmsPage }))
  );

/**
 * Save a cmsPage
 * @param req
 * @param res
 * @returns void
 */
export const addCMSPage = (req, res) => {
  if (!req.body.cmsPage.title || !req.body.cmsPage.content) {
    res.status(403).end();
  }

  const newCMSPage = new CMSPage(req.body.cmsPage);

  // Let's sanitize inputs
  newCMSPage.title = sanitizeHtml(newCMSPage.title);
  newCMSPage.content = sanitizeHtml(newCMSPage.content);

  newCMSPage.slug = slug(newCMSPage.title.toLowerCase(), { lowercase: true });
  newCMSPage.cuid = cuid();
  newCMSPage.save(
    (err, saved) =>
      (err ? res.status(500).send(err) : res.json({ cmsPage: saved }))
  );
};

/**
 * Delete a cmsPage
 * @param req
 * @param res
 * @returns void
 */
export const deleteCMSPage = (req, res) => {
  CMSPage.findOne({ cuid: req.params.cuid }).exec((err, cmsPage) => {
    if (err) {
      res.status(500).send(err);
    }

    cmsPage.remove(() => {
      res.status(200).end();
    });
  });
};

/**
 * Edit a cmsPage
 * @param req
 * @param res
 * @returns void
 */
export const editCMSPage = (req, res) => {
  const query = { cuid: req.params.cuid };
  const newValues = {
    $set: {
      title: req.body.cmsPage.title,
      content: req.body.cmsPage.content,
      slug: slug(req.body.cmsPage.title, { lowercase: true }),
    },
  };
  CMSPage.findOneAndUpdate(
    query,
    newValues,
    (err, saved) =>
      (
        err
        ? res.status(500).send(err)
        : res.json({ cmsPage: Object.assign(saved, {}, newValues.$set) })
      )
  );
};
