interface Props {
  title: string;
  className: string;
}

const TitleComponent = ({ title, className }: Props) => {
  return (
    <h3 className={`${className} text-center font-bold text-3xl`}>{title}</h3>
  );
};

export default TitleComponent;
