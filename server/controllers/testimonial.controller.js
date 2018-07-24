import Testimonial from '../models/testimonial';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all testimonials
 * @param req
 * @param res
 * @returns void
 */
export const getTestimonials = (req, res) =>
  Testimonial.find()
    .sort('-dateAdded')
    .exec(
      (err, testimonials) =>
        (err ? res.status(500).send(err) : res.json({ testimonials }))
    );

/**
 * Get a single testimonial
 * @param req
 * @param res
 * @returns void
 */
export const getTestimonial = (req, res) =>
  Testimonial.findOne({ slug: req.params.slug }).exec(
    (err, testimonial) => (err ? res.status(500).send(err) : res.json({ testimonial }))
  );

/**
 * Save a testimonial
 * @param req
 * @param res
 * @returns void
 */
export const addTestimonial = (req, res) => {
  if (!req.body.testimonial.title || !req.body.testimonial.content) {
    res.status(403).end();
  }

  const newTestimonial = new Testimonial(req.body.testimonial);

  // Let's sanitize inputs
  newTestimonial.title = sanitizeHtml(newTestimonial.title);
  newTestimonial.content = sanitizeHtml(newTestimonial.content);

  newTestimonial.slug = slug(newTestimonial.title.toLowerCase(), { lowercase: true });
  newTestimonial.cuid = cuid();
  newTestimonial.save(
    (err, saved) =>
      (err ? res.status(500).send(err) : res.json({ testimonial: saved }))
  );
};

/**
 * Delete a testimonial
 * @param req
 * @param res
 * @returns void
 */
export const deleteTestimonial = (req, res) => {
  Testimonial.findOne({ cuid: req.params.cuid }).exec((err, testimonial) => {
    if (err) {
      res.status(500).send(err);
    }

    testimonial.remove(() => {
      res.status(200).end();
    });
  });
};

/**
 * Edit a testimonial
 * @param req
 * @param res
 * @returns void
 */
export const editTestimonial = (req, res) => {
  const query = { cuid: req.params.cuid };
  const newValues = {
    $set: {
      title: req.body.testimonial.title,
      content: req.body.testimonial.content,
      slug: slug(req.body.testimonial.title, { lowercase: true }),
    },
  };
  Testimonial.findOneAndUpdate(
    query,
    newValues,
    (err, saved) =>
      (
        err
        ? res.status(500).send(err)
        : res.json({ testimonial: Object.assign(saved, {}, newValues.$set) })
      )
  );
};
