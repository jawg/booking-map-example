import serve from 'rollup-plugin-serve';
import html from '@web/rollup-plugin-html';
import dotenv from 'rollup-plugin-dotenv';
import { emptyDirectories } from 'rollup-plugin-app-utils';

const output = '.serve';

export default [
  {
    input: {},
    output: { dir: output },
    plugins: [
      emptyDirectories(output),
      dotenv(),
      html({
        input: 'index.html',
        transformHtml: (html) => html.replace(/YOUR_ACCESS_TOKEN/g, process.env.JAWG_ACCESS_TOKEN),
      }),
      serve({ host: 'localhost', port: 8000, contentBase: [output, './'] }),
    ],
  },
];
