import React from 'react';
import { SkillItem } from './SkillItem';
import { TextShpere } from './TextShpere';

const SkillsView = () => {
    return (
        <>
            <section className="w3l-skills py-4" id="skills">
                <div className="container py-lg-5 py-md-4 py-3 HomePageSkills">
                    <div className="row">
                        <div className="col-lg-6 pe-lg-5 mt-2">
                            {/* <img src="/src/assets/images/about2.jpg" alt="" className="img-fluid" /> */}
                            <TextShpere />
                        </div>
                        <div className="col-lg-6 mt-lg-0 mt-5 w3l-content-6 px-lg-4 align-self-center">
                            <h6 className="w3l-title-small mb-2">Veamos las</h6>
                            <h3 className="w3l-title-main">Variables y Arqueotipos Identificados</h3>
                            <p className="my-4">A lo largo de nuestra investigación hemos identificado las siguientes variables y arqueotipos. Esto nos ayudo a elaborar el modelo futuro de nuestro proyecto.</p>
                            <SkillItem title="Límites de Crecimiento" progress={80} />
                            <SkillItem title="Tragedia del Terreno Común" progress={90} />
                            <SkillItem title="Erosión de Metas" progress={60} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SkillsView;
