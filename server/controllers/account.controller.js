import Account from '../models/account';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all accounts
 * @param req
 * @param res
 * @returns void
 */
export const getAccounts = (req, res) =>
  Account.find()
    .sort('-dateAdded')
    .exec(
      (err, accounts) =>
        (err ? res.status(500).send(err) : res.json({ accounts }))
    );

/**
 * Get an accounts by patientID
 * @param req
 * @param res
 * @returns void
 */
export const getAccountByPatientID = (req, res) =>
  Account.find({ patientID: req.params.patientID }).exec(
    (err, accounts) => (err ? res.status(500).send(err) : res.json({ accounts }))
  );

/**
 * check login credential
 * @param req
 * @param res
 */
export const checkLoginCredential = (req, res) => {
  Account.find({ userName: req.params.username, password: req.params.password, isActiveAccount: true }).exec(
    (err, account) => (err ? res.status(500).send(err) : res.json({ account }))
  );
};

/**
 * Save an account
 * @param req
 * @param res
 * @returns void
 */
export const addAccount = (req, res) => {
  if (!req.body.account.userName || !req.body.account.password || !req.body.account.patientID) {
    res.status(403).end();
  }

  const newAccount = new Account(req.body.account);

  newAccount.userName = sanitizeHtml(newAccount.userName);
  newAccount.password = newAccount.password;

  newAccount.save(
    (err, saved) =>
      (err ? res.status(500).send(err) : res.json({ account: saved }))
  );
};

/**
 * Edit an account
 * @param req
 * @param res
 * @returns void
 */
export const editAccount = (req, res) => {
  const query = { _id: req.params._id };
  const newValues = {
    $set: {
      isActiveAccount: req.body.account.isActiveAccount,
    },
  };
  Account.findOneAndUpdate(
    query,
    newValues,
    (err, saved) =>
      (
        err
          ? res.status(500).send(err)
          : res.json({ account: Object.assign(saved, {}, newValues.$set) })
      )
  );
};
