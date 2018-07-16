import Service from '../models/service';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all services
 * @param req
 * @param res
 * @returns void
 */
export const getServices = (req, res) =>
  Service.find()
    .sort('-dateAdded')
    .exec(
      (err, services) =>
        (err ? res.status(500).send(err) : res.json({ services }))
    );

/**
 * Get a single service
 * @param req
 * @param res
 * @returns void
 */
export const getService = (req, res) =>
  Service.findOne({ slug: req.params.slug }).exec(
    (err, service) => (err ? res.status(500).send(err) : res.json({ service }))
  );

/**
 * Save a service
 * @param req
 * @param res
 * @returns void
 */
export const addService = (req, res) => {
  if (!req.body.service.title || !req.body.service.content) {
    res.status(403).end();
  }

  const newService = new Service(req.body.service);

  // Let's sanitize inputs
  newService.title = sanitizeHtml(newService.title);
  newService.content = sanitizeHtml(newService.content);

  newService.slug = slug(newService.title.toLowerCase(), { lowercase: true });
  newService.cuid = cuid();
  newService.save(
    (err, saved) =>
      (err ? res.status(500).send(err) : res.json({ service: saved }))
  );
};

/**
 * Delete a service
 * @param req
 * @param res
 * @returns void
 */
export const deleteService = (req, res) => {
  Service.findOne({ cuid: req.params.cuid }).exec((err, service) => {
    if (err) {
      res.status(500).send(err);
    }

    service.remove(() => {
      res.status(200).end();
    });
  });
};

/**
 * Edit a service
 * @param req
 * @param res
 * @returns void
 */
export const editService = () => [];
