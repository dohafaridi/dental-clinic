import Patient from '../models/patient';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all patients
 * @param req
 * @param res
 * @returns void
 */
export const getPatients = (req, res) =>
  Patient.find()
    .sort('-dateAdded')
    .exec(
      (err, patients) =>
        (err ? res.status(500).send(err) : res.json({ patients }))
    );

/**
 * Get a single patient
 * @param req
 * @param res
 * @returns void
 */
export const getPatient = (req, res) =>
  Patient.findOne({ slug: req.params.slug }).exec(
    (err, patient) => (err ? res.status(500).send(err) : res.json({ patient }))
  );

/**
 * Save a patient
 * @param req
 * @param res
 * @returns void
 */
export const addPatient = (req, res) => {
  if (!req.body.patient.title || !req.body.patient.content) {
    res.status(403).end();
  }

  const newPatient = new Patient(req.body.patient);

  // Let's sanitize inputs
  newPatient.title = sanitizeHtml(newPatient.title);
  newPatient.content = sanitizeHtml(newPatient.content);

  newPatient.slug = slug(newPatient.title.toLowerCase(), { lowercase: true });
  newPatient.cuid = cuid();
  newPatient.save(
    (err, saved) =>
      (err ? res.status(500).send(err) : res.json({ patient: saved }))
  );
};

/**
 * Delete a patient
 * @param req
 * @param res
 * @returns void
 */
export const deletePatient = (req, res) => {
  Patient.findOne({ cuid: req.params.cuid }).exec((err, patient) => {
    if (err) {
      res.status(500).send(err);
    }

    patient.remove(() => {
      res.status(200).end();
    });
  });
};

/**
 * Edit a patient
 * @param req
 * @param res
 * @returns void
 */
export const editPatient = (req, res) => {
  const query = { cuid: req.params.cuid };
  const newValues = {
    $set: {
      title: req.body.patient.title,
      content: req.body.patient.content,
      slug: slug(req.body.patient.title, { lowercase: true }),
    },
  };
  Patient.findOneAndUpdate(
    query,
    newValues,
    (err, saved) =>
      (
        err
        ? res.status(500).send(err)
        : res.json({ patient: Object.assign(saved, {}, newValues.$set) })
      )
  );
};
