import React from 'react';
import PureHome from '../pure/PureHome';
import FooterContainer from './FooterContainer';
import UploaderMainContainer from './UploaderMainContainer';
import UploaderLoadContainer from './UploaderLoadContainer';
import UploaderSuccessContainer from './UploaderSuccessContainer';

const  load = false;

const HomeContainer = () => {
    return (
        <>
         {/* <PureHome/> */}
         <UploaderMainContainer/>
         {/* <UploaderLoadContainer/>       */}
            
        {/* <UploaderSuccessContainer/> */}
         <FooterContainer/>

        </>
    );
}

export default HomeContainer;
