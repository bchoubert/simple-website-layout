import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import './Features.scss';

const features = {
  feature1: {
    name: 'Feature 1',
    version1: true,
    version2: true
  },
  feature2: {
    name: 'Feature 2',
    version1: true,
    version2: true
  },
  feature3: {
    name: 'Feature 3',
    version1: true,
    version2: true
  },
  feature4: {
    name: 'Feature 4',
    version1: false,
    version2: true
  },
  feature5: {
    name: 'Feature 5',
    version1: false,
    version2: true
  }
};

function Features() {
  return (
    <div className="Features">
      <div className="Features-content">
        <table>
          <thead>
            <tr>
              <th>Features &amp; Benefits</th>
              <th>Version 1</th>
              <th>Version 2</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(features).map(([key, value]) => 
              <tr key={key}>
                <td>{value.name}</td>
                <td>{!!value.version1 ? <FontAwesomeIcon icon={faCheck} fixedWidth /> : null}</td>
                <td>{!!value.version2 ? <FontAwesomeIcon icon={faCheck} fixedWidth /> : null}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Features;
