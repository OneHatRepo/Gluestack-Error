import "@/global.css";
import { GluestackUIProvider } from "@/src/components/Gluestack/gluestack-ui-provider";
import { Box } from "@/src/components/Gluestack/box";
import { Text } from 'react-native';

export default function App() {

	return <GluestackUIProvider mode="light">
				<Box>
					<Text>Here</Text>
				</Box>
			</GluestackUIProvider>;
}
