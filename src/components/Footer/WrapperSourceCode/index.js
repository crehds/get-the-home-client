import React from 'react';
import { DiReact, DiRuby } from 'react-icons/di';
import { WrapperSourceCode } from './styles';

function SourceCode() {
  return (
    <WrapperSourceCode>
      <p>Source Code</p>
      <div>
        <div>
          <DiRuby size="1.5rem" />
          <p>Ruby on Rails REST API</p>
        </div>
        <div>
          <DiReact size="2rem" />
          <p>React Responsive SPA</p>
        </div>
      </div>
    </WrapperSourceCode>
  );
}

export default SourceCode;
