const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    join(__dirname, './projects/ngx-list-minimap/**/!(*.stories|*.spec).{ts,html}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
