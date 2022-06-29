import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';

const MAIL_KEY = 'mails';
_createMails();

export const mailService = {
    query,
    remove,
    save,
    getEmptyMail,
    get,
    getNextMailId
};

function query() {
    return storageService.query(MAIL_KEY)
    // return utilService.loadFromStorage(CARS_KEY);
}

function remove(mailId) {
    // return Promise.reject('Big Error Badd')
    return storageService.remove(MAIL_KEY, mailId)
}

function get(mailId) {
    return storageService.get(MAIL_KEY, mailId)
}

function save(mail) {
    if (mail.id) return storageService.put(MAIL_KEY, mail)
    else return storageService.post(MAIL_KEY, mail)
}
function getNextMailId(mailId) {
    return storageService.query(MAIL_KEY)
        .then(mails => {
            const idx = mails.findIndex(mail => mail.id === mailId)
            return (idx < mails.length - 1) ? mails[idx + 1].id : mails[0].id
        })
}

function getEmptyMail() {
    return {
        id: '',
        vendor: '',
        maxSpeed: 0
    };
}

function _createMails() {
    let mails = utilService.loadFromStorage(MAIL_KEY);
    if (!mails || !mails.length) {
        mails = [];
        mails.push(_createMail('Yonatan Razel', 'hi', 'Would love to catch up sometimes', 'frkl@njfl.com'));
        mails.push(_createMail('Ishay Ribo', 'bye', 'show all the emails that were', 'ajkl@njl.com'));
        mails.push(_createMail('Kanan Ben Ari', 'love', 'Would love to catch up sometimes', 'ajfl@n4.com'));
        mails.push(_createMail('Shlomo Artzi', 'mess', 'emailService query function should get a criteria object, here is an idea', 'a2hl@n4.com'));
        utilService.saveToStorage(MAIL_KEY, mails);
    }
    return mails;
}

function _createMail(fullName, subject, body, to) {
    const mail = {
        id: utilService.makeId(),
        fullName,
        subject,
        body,
        isRead: false,
        sentAt: new Date(),
        to,
    };
    return mail;
}