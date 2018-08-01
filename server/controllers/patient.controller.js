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
  if (
    !req.body.patient.firstName ||
    !req.body.patient.lastName ||
    !req.body.patient.sex ||
    !req.body.patient.birthDay ||
    !req.body.patient.phone ||
    !req.body.patient.email ||
    !req.body.patient.address ||
    !req.body.patient.city ||
    !req.body.patient.maritalStatus ||
    !req.body.patient.company ||
    !req.body.patient.doctor ||
    !req.body.patient.insurance
  ) {
    res.status(403).end();
  }

  const newPatient = new Patient(req.body.patient);

  // Let's sanitize inputs
  newPatient.firstName = sanitizeHtml(newPatient.firstName);
  newPatient.lastName = sanitizeHtml(newPatient.lastName);
  newPatient.sex = sanitizeHtml(newPatient.sex);
  newPatient.birthDay = newPatient.birthDay;
  newPatient.phone = sanitizeHtml(newPatient.phone);
  newPatient.email = sanitizeHtml(newPatient.email);
  newPatient.address = sanitizeHtml(newPatient.address);
  newPatient.city = sanitizeHtml(newPatient.city);
  newPatient.maritalStatus = sanitizeHtml(newPatient.maritalStatus);
  newPatient.company = sanitizeHtml(newPatient.company);
  newPatient.doctor = sanitizeHtml(newPatient.doctor);
  newPatient.insurance = sanitizeHtml(newPatient.insurance);
  newPatient.slug = slug(newPatient.firstName.toLowerCase(), {
    lowercase: true,
  });
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
      firstName: sanitizeHtml(req.body.patient.firstName),
      lastName: sanitizeHtml(req.body.patient.lastName),
      sex: sanitizeHtml(req.body.patient.sex),
      birthDay: req.body.patient.birthDay,
      phone: sanitizeHtml(req.body.patient.phone),
      email: sanitizeHtml(req.body.patient.email),
      address: sanitizeHtml(req.body.patient.address),
      city: sanitizeHtml(req.body.patient.city),
      maritalStatus: sanitizeHtml(req.body.patient.maritalStatus),
      company: sanitizeHtml(req.body.patient.company),
      doctor: sanitizeHtml(req.body.patient.doctor),
      insurance: sanitizeHtml(req.body.patient.insurance),
      slug: slug(req.body.patient.firstName, { lowercase: true }),
    },
  };
  Patient.findOneAndUpdate(
    query,
    newValues,
    (err, saved) =>
      (err
        ? res.status(500).send(err)
        : res.json({ patient: Object.assign(saved, {}, newValues.$set) }))
  );
};
