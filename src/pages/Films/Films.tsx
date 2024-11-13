import Carousel from "../../components/Carousel/Carousel";
import { FilmsStyled } from "./Films.Styled";
import Card from "../../components/Card/Card";
import image from "/the-dark-knight.jpg"

function Films() {
	return (
		<FilmsStyled>
			<Carousel />
			<Card
				$filmImage={image}
				text="Batman"
				description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, libero."
				sign="?"
				type={"button"}
			></Card>
		</FilmsStyled>
	);
}

export default Films;


