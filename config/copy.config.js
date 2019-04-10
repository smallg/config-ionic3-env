var env = process.env.IONIC_ENV;
var certName = 'test.' + env + '.png';
module.exports = {
  extends: [ '{{ROOT}}/node_modules/@ionic/app-scripts/config/copy.config.js' ],
  copyCertificates: {
    src: [ '{{ROOT}}/resources/certificates/' + certName ],
    dest: '{{WWW}}/certificates'
  }
};
