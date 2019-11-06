module.exports = {
  name: 'chat-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/chat-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
