import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo, faAddressCard, faBacon } from '@fortawesome/free-solid-svg-icons';

import './Services.scss';

const services = {
  service1: {
    title: 'Service 1',
    icon: faRedo,
    description: 'Aliqua amet deserunt qui reprehenderit fugiat in duis id et id minim eiusmod. Eiusmod occaecat aliqua aute enim adipisicing minim tempor esse eiusmod dolore sit ipsum. In veniam ex Lorem eiusmod Lorem.'
  },
  service2: {
    title: 'Service 2',
    icon: faAddressCard,
    description: 'Aliqua amet deserunt qui reprehenderit fugiat in duis id et id minim eiusmod. Eiusmod occaecat aliqua aute enim adipisicing minim tempor esse eiusmod dolore sit ipsum. In veniam ex Lorem eiusmod Lorem.'
  },
  service3: {
    title: 'Service 3',
    icon: faBacon,
    description: 'Aliqua amet deserunt qui reprehenderit fugiat in duis id et id minim eiusmod. Eiusmod occaecat aliqua aute enim adipisicing minim tempor esse eiusmod dolore sit ipsum. In veniam ex Lorem eiusmod Lorem.'
  }
};

function Services() {
  return (
    <div className="Services">
      <div className="Services-content">
        {Object.entries(services).map(([key, value]) =>
          <div className="card" key={key}>
            <h2 className="card-title">
              <FontAwesomeIcon icon={value.icon} fixedWidth />
              {value.title}
            </h2>
            <p>{value.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Services;
