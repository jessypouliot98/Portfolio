import { Text, View } from "@react-pdf/renderer";
import { tw } from "../../../utils/tailwind";

export function Section({ children }: React.PropsWithChildren) {
  return (
    <View>
      {children}
    </View>
  )
}

export namespace Section {

  export function Title({ children }: React.PropsWithChildren) {
    return (
      <View style={tw("w-full flex-row items-center gap-8")}>
        <View style={tw("flex-1 h-px bg-blue-200")} />
        <Text style={tw("text-sm font-bold uppercase tracking-wide text-blue-400")}>
          {children}
        </Text>
        <View style={tw("flex-1 h-px bg-blue-200")} />
      </View>
    );
  }

}
