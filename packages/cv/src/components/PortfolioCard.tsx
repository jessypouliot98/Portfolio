import { View, Text } from "@react-pdf/renderer";
import { tw } from "../utils/tailwind";

export type PortfolioCardProps = {
  title: string;
  stackType: string;
  stack: string[];
  Details?: React.ReactNode;
}

export function PortfolioCard({ title, stackType, stack, Details }: PortfolioCardProps) {
  return (
    <View style={tw("px-2 py-2 rounded bg-gray-100 gap-1")}>
      <View>
        <View style={tw("flex-row items-center gap-2")}>
          <Text style={tw("text-xs leading-snug font-bold text-blue-500")}>{stackType}</Text>
          <Text style={tw("text-xs leading-snug text-black")}>-</Text>
          <Text style={tw("text-xs leading-snug text-gray-500")}>{stack.join(', ')}</Text>
        </View>
      </View>
      <View style={tw("flex-row items-center gap-2")}>
        <Text style={tw("text-base leading-snug text-black")}>{title}</Text>
      </View>
      <View style={tw("text-xs pr-2 leading-snug")}>
        {Details}
      </View>
    </View>
  )
}