import Service from '../models/service';

export const getServices = (req, res) =>
  Service.find()
    .sort('-dateAdded')
    .exec(
      (err, services) =>
        (err ? res.status(500).send(err) : res.json({ services }))
      );

export const getService = (req, res) =>
  Service.findOne({ slug: req.params.slug }).exec(
    (err, service) => (err ? res.status(500).send(err) : res.json({ service }))
  );
