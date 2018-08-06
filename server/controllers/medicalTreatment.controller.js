import MedicalTreatment from '../models/medicalTreatment';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all medicalTreatments
 * @param req
 * @param res
 * @returns void
 */
export const getMedicalTreatments = (req, res) =>
  MedicalTreatment.find()
    .sort('-dateAdded')
    .exec(
      (err, medicalTreatments) =>
        (err ? res.status(500).send(err) : res.json({ medicalTreatments }))
    );

/**
 * Get a single medicalTreatment
 * @param req
 * @param res
 * @returns void
 */
export const getMedicalTreatmentByPatientID = (req, res) =>
  MedicalTreatment.find({ patientID: req.params.patientID }).exec(
    (err, medicalTreatments) => (err ? res.status(500).send(err) : res.json({ medicalTreatments }))
  );

/**
 * Save a medicalTreatment
 * @param req
 * @param res
 * @returns void
 */
export const addMedicalTreatment = (req, res) => {
  if (!req.body.medicalTreatment.title || !req.body.medicalTreatment.content) {
    res.status(403).end();
  }

  const newMedicalTreatment = new MedicalTreatment(req.body.medicalTreatment);

  // Let's sanitize inputs
  newMedicalTreatment.title = sanitizeHtml(newMedicalTreatment.title);
  newMedicalTreatment.content = sanitizeHtml(newMedicalTreatment.content);
  newMedicalTreatment.cost = sanitizeHtml(newMedicalTreatment.cost);
  newMedicalTreatment.patientID = sanitizeHtml(newMedicalTreatment.patientID);

  newMedicalTreatment.slug = slug(newMedicalTreatment.title.toLowerCase(), { lowercase: true });
  newMedicalTreatment.cuid = cuid();
  newMedicalTreatment.save(
    (err, saved) =>
      (err ? res.status(500).send(err) : res.json({ medicalTreatment: saved }))
  );
};

/**
 * Delete a medicalTreatment
 * @param req
 * @param res
 * @returns void
 */
export const deleteMedicalTreatment = (req, res) => {
  MedicalTreatment.findOne({ cuid: req.params.cuid }).exec((err, medicalTreatment) => {
    if (err) {
      res.status(500).send(err);
    }

    medicalTreatment.remove(() => {
      res.status(200).end();
    });
  });
};

/**
 * Edit a medicalTreatment
 * @param req
 * @param res
 * @returns void
 */
export const editMedicalTreatment = (req, res) => {
  const query = { cuid: req.params.cuid };
  const newValues = {
    $set: {
      title: req.body.medicalTreatment.title,
      content: req.body.medicalTreatment.content,
      cost: req.body.medicalTreatment.cost,
      slug: slug(req.body.medicalTreatment.title, { lowercase: true }),
    },
  };
  MedicalTreatment.findOneAndUpdate(
    query,
    newValues,
    (err, saved) =>
      (
        err
        ? res.status(500).send(err)
        : res.json({ medicalTreatment: Object.assign(saved, {}, newValues.$set) })
      )
  );
};
