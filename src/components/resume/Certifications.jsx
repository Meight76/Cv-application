import { Fragment } from 'react';

export default function Certifications({ certifications }) {
  const certUi = certifications.map((cert) => {
    return (
      <Fragment key={crypto.randomUUID()}>
        <h3>{cert?.title || '[Certification Name]'}</h3>
        <ul>
          <li className='cert-description'>
            <span>{cert?.institute || '[Institute]'}</span>
            <span>{cert?.year || '[Year]'}</span>
          </li>
        </ul>
      </Fragment>
    );
  });
  if (certUi.length > 0) return certUi;
  return (
    <>
      <h3>[Certification Name]</h3>
      <ul>
        <li>
          <span>[Institute]</span>
          <span>[Year]</span>
        </li>
      </ul>
    </>
  );
}
