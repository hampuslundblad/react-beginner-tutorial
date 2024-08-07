interface TitleProps {
  text: string;
}

const Title = (props: TitleProps) => {
  return <h1>{props.text}</h1>;
};

export default Title;
