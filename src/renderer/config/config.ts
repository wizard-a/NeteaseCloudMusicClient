const cwd = process.cwd();

export default {
  history: 'hash',
  outputPath: `../../dist/renderer`,
  publicPath: './',
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: true,
        dll: true,
        hardSource: false,
        routes: {
          exclude: [/components/],
        },
      },
    ],
  ],
  // routes: [
  //   {
  //     path: '/',
  //     component: './index',
  //   },
  // ],
};
