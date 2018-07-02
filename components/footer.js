export default () => (
  <div>
    <p className="credits">
      Built With ❤️ By <a href="https://twitter.com/soska">Armando Sosa</a>.
    </p>
    <p className="thanks">
      Powered by{' '}
      <a href="https://github.com/janjakubnanista/svg-to-jsx">SVG-toJSX</a>,{' '}
      <a href="https://reactjs.org">React</a> and{' '}
      <a href="https://nextjs.org/">Next.js</a> // Hosted on{' '}
      <a href="https://zeit.co/now">Now</a>. //{' '}
      <a href="https://ko-fi.com/armandososa">☕️ Buy Me A Cofee</a>.{' '}
    </p>
    <style jsx>{`
      div {
        text-align: center;
        color: #7d798c;
      }
      a {
        color: #34946e;
        text-decoration: none;
        transition-property: color;
        transition-duration: 0.25s;
      }
      a:hover {
        color: #fcec4e;
      }
      .credits {
        font-size: 18px;
      }
      .thanks {
        font-size: 14px;
      }
    `}</style>
  </div>
);
