type BusinessFooterPropsType = {};

const BusinessFooter: React.FC<BusinessFooterPropsType> = ({}) => {
  return (
    <div
      data-testid="business_footer"
      className="w-fit mx-auto flex justify-between divide-x divide-secondary-label grow [&>*]:px-8 [&>*]:w-full whitespace-nowrap text-xs text-secondary-label"
    >
      <div>
        <p>Copyrights 2022</p>
      </div>
      <div>
        <a href="#privacy" className="hover:brightness-125 transition">
          Law&Privacy
        </a>
      </div>
      <div>
        <p>
          Crafted by{" "}
          <a href="#privacy" className="hover:brightness-125 transition">
            J&K Bros. Company
          </a>
        </p>
      </div>
    </div>
  );
};

export default BusinessFooter;
