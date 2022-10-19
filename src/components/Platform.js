import React from "react";

const Platform = () => {
  return (
    <div name="platform" className="w-full my-16 md:my-32 openSans">
      <div className="max-w-[1240px] mx-auto px-6">
        <h2 className="text-[32px]  md:text-5xl font-bold text-center">All-in-one Platform</h2>
        <p className="text-2xl py-4 md:py-8 text-gray-600 text-center leading-snug tracking-[.08em]">
          All-in-one marketing platforms provide businesses with an integrated
          set of online marketing capabilities.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-4 pt-4">
          <div className="flex bg-white rounded-xl shadow-xl mx-auto px-6 border">
            <div>
              <h3 className="font-bold text-xl mt-4">
                Email Marketing
              </h3>
              <p className="text-xl text-gray-600 pt-2 pb-4 leading-relaxed">
                Email marketing is a powerful marketing channel, a form of
                direct marketing as well as digital marketing, that uses email
                to promote your business.
              </p>
            </div>
          </div>
          <div className="flex bg-white rounded-xl shadow-xl px-4 border">
            <div>
              <h3 className="font-bold text-xl mt-4">
                Audience Segmentation
              </h3>
              <p className="text-xl text-gray-600 pt-2 pb-4 leading-relaxed">
                A marketing strategy based on identifying subgroups within the
                target audience in order to deliver more tailored messaging for
                stronger connections.
              </p>
            </div>
          </div>
          <div className="flex bg-white rounded-xl shadow-xl mx-auto px-6 border">
            <div>
              <h3 className="font-bold text-xl mt-4">
                Targetting Tools
              </h3>
              <p className="text-xl text-gray-600 pt-2 pb-4 leading-relaxed">
                Drive Results with powerful website Targeting Tools.Leverage
                our audience data to target visitors on your site.Customize
                tools to match your brand.
              </p>
            </div>
          </div>
          <div className="flex bg-white rounded-xl shadow-xl mx-auto px-6 border">
            <div>
              <h3 className="font-bold text-xl md:text-xl mt-4">CRM</h3>
              <p className="text-xl text-gray-600 pt-2 pb-4 leading-relaxed">
              Create stronger connections with your customers from day 1 with our Marketing CRM tools.To make contact management easy, use our CRM solution.
              </p>
            </div>
          </div>
          <div className="flex bg-white rounded-xl shadow-xl mx-auto px-6 border">
            <div>
              <h3 className="font-bold text-xl md:text-xl mt-4">
                Dynamic Content
              </h3>
              <p className="text-xl text-gray-600 pt-2 pb-4 leading-relaxed">
              Smart content delights customers.Our Dynamic content creates an experience that's customized specifically for the visitor or reader at that moment
              </p>
            </div>
          </div>
          <div className="flex bg-white rounded-xl shadow-xl mx-auto px-6 border">
            <div>
              <h3 className="font-bold text-xl md:text-xl mt-4">
                Digital marketing
              </h3>
              <p className="text-xl text-gray-600 pt-2 pb-4 leading-relaxed">
              We help you establish an authoritative online presence with best marketing strategies.Our digital marketing agency will deliver outstanding results
              </p>
            </div>
          </div>
          <div className="flex bg-white rounded-xl shadow-xl mx-auto px-6 border">
            <div>
              <h3 className="font-bold text-xl md:text-xl mt-4">
                Landing Page
              </h3>
              <p className="text-xl text-gray-600 pt-2 pb-4 leading-relaxed">
              Cloud XL landing page builder,it takes just a few minutes to design beautiful landing pages.Start with custom domain and get your business online now. 
              </p>
            </div>
          </div>
          <div className="flex bg-white rounded-xl shadow-xl mx-auto px-6 border">
            <div>
              <h3 className="font-bold text-xl md:text-xl mt-4">SEO</h3>
              <p className="text-xl text-gray-600 pt-2 pb-4 leading-relaxed">
              We make sure that search engines like Google see your site in terms of popularity, credibility relevance with our effective off-page Cloud XL SEO services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
