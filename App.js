import "@/global.css";
import { GluestackUIProvider } from "@/src/components/Gluestack/gluestack-ui-provider";
import { Box } from "@/src/components/Gluestack/box";
import { Text } from 'react-native';

export default function App() {

	return <GluestackUIProvider mode="light">
				<Box
					className="p-[10px]"
				>
					<Text>10px</Text>
				</Box>
				<Box
					className="p-[11px]"
				>
					<Text>11px</Text>
				</Box>
			</GluestackUIProvider>;
}
