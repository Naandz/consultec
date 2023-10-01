import { Button, Group } from "@mantine/core";
import { TbEye, TbPencil, TbTrashX } from "react-icons/tb";


interface PropsBotaoDeAcao {
	acaoEditar?: () => void;
	acaoExcluir?: () => void;
	acaoDetalhar?: () => void;
}

export default function Acoes(props: PropsBotaoDeAcao) {
	return (
		<Group position="right" noWrap>
			{props.acaoDetalhar && (
				<Button compact variant="subtle" onClick={props.acaoDetalhar}>
					{<TbEye />}
				</Button>
			)}
			{props.acaoEditar && (
				<Button
					color="blue"
					compact
					variant="subtle"
					onClick={props.acaoEditar}
				>
					{<TbPencil />}
				</Button>
			)}
			{props.acaoExcluir && (
				<Button
					color="red"
					compact
					variant="subtle"
					onClick={props.acaoExcluir}
				>
					{<TbTrashX />}
				</Button>
			)}
		</Group>
	);
}
