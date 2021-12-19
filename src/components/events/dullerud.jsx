import React from "react";
import dullerud_profile from "../../images/dullerud_profile.jpeg"

function dullerud() {
  return (
    <div className="about">
      <div class="container">
        <div class="my-5">
        <div class="container">
            <h1>Reading Race: AI Recognizes Patient's Racial Identity In Medical Images</h1>
          </div>
          <p style={{'textAlign': 'center'}}>Date: Friday, Oct 1st, 7:00-8:00 PM EDT</p>
          <hr/>
          <p style={{color: "#FF6B48", "text-align": 'center', "font-size": 25}}>Speaker Bio</p>
          <div class="container text-center">
            <div class="row">
              <div class="col">
                <figure>
                  <img alt="" class="rounded" style={{'width': '100%'}} src={dullerud_profile}/>
                  <p style={{'textAlign': 'center', 'color': '#00a5b9'}}>Natalie Dullerud</p>
                </figure>
              </div>
              <div class="col-9">
                <p>
                Natalie Dullerud is a Master’s student and machine learning researcher at University of Toronto. She previously graduated magna cum laude with a Bachelor’s degree in Mathematics from University of Southern California, with minors in computer science and chemistry, and recently, completed a graduate research internship at Microsoft Research - Redmond. During her undergraduate studies, Natalie studied abroad at Oxford University and completed a thesis on optimal sustainable solutions to reducing maternal mortality in Sierra Leone. At University of Toronto, Natalie was awarded a Junior Fellowship at Massey College, an institution dedicated to interdisciplinary scholarship. Natalie’s research largely focuses on differential privacy, algorithmic fairness, and applications to clinical and biological settings. Her work encompasses development of machine learning approaches for a broad range of tasks, including clustering of longitudinal immunological data, optimal immunotherapy dose scheduling, analysis of differentially private synthetic data, and private collaborative learning. She has been published at several high-profile conferences, including IEEE CDC, ICLR, FAccT, and IEEE Security and Privacy.
                </p>
              </div>
            </div>
          </div>

          
            <p style={{'padding-top':'25pt', color: "#FF6B48", "text-align": 'center', "font-size": 25}}>Workshop Information</p>
            <p style={{"text-align": 'center', "font-size": 25, 'font-weight': 'bold'}}>Reading Race: AI Recognizes Patient's Racial Identity In Medical Images</p>
            <p><b>Background:</b> In medical imaging, prior studies have demonstrated disparate AI performance by race, yet there is no known correlation for race on medical imaging that would be obvious to the human expert interpreting the images.</p>
            <p><b>Methods:</b> Using private and public datasets we evaluate: A) performance quantification of deep learning models to detect race from medical images, including the ability of these models to generalize to external environments and across multiple imaging modalities, B) assessment of possible confounding anatomic and phenotype population features, such as disease distribution and body habitus as predictors of race, and C) investigation into the underlying mechanism by which AI models can recognize race.</p>
            <p><b>Findings:</b> Standard deep learning models can be trained to predict race from medical images with high performance across multiple imaging modalities. Our findings hold under external validation conditions, as well as when models are optimized to perform clinically motivated tasks. We demonstrate this detection is not due to trivial proxies or imaging-related surrogate covariates for race, such as underlying disease distribution. Finally, we show that performance persists over all anatomical regions and frequency spectrum of the images suggesting that mitigation efforts will be challenging and demand further study.</p>
            <p><b>Interpretation:</b> We emphasize that model ability to predict self-reported race is itself not the issue of importance. However, our findings that AI can trivially predict self-reported race -- even from corrupted, cropped, and noised medical images -- in a setting where clinical experts cannot, creates an enormous risk for all model deployments in medical imaging: if an AI model secretly used its knowledge of self-reported race to misclassify all Black patients, radiologists would not be able to tell using the same data the model has access to.</p>
        </div>
      </div>
    </div>
  );
}

export default dullerud;
