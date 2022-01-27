declare module "styled-components/native" {
  import * as ReactNative from "react-native";

  export type StyledTemplateArgument =
    | string
    | boolean
    | number
    | undefined
    | null;

  export type StyledSelector<Props> = (props: Props) => StyledTemplateArgument;

  export interface StyledTemplate<ComponentProps> {
    <Props>(
      strings: ReadonlyArray<string>,
      ...selectors: (
        | StyledTemplateArgument
        | StyledSelector<Props & ComponentProps>
      )[]
    ): React.ComponentType<Props & ComponentProps>;
    attrs: (
      propertyMap: (props: ComponentProps) => ComponentProps
    ) => StyledTemplate<ComponentProps>;
  }

  export interface StyledInterface {
    <ComponentProps extends object>(
      component: React.ComponentType<ComponentProps>
    ): StyledTemplate<ComponentProps>;
  }

  export interface StyledInterface {
    ActivityIndicator: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.ActivityIndicator>
    >;
    ActivityIndicatorIOS: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.ActivityIndicator>
    >;
    Button: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.Button>
    >;
    DatePickerIOS: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.DatePickerIOS>
    >;
    DrawerLayoutAndroid: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.DrawerLayoutAndroid>
    >;
    Image: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.Image>
    >;
    ImageBackground: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.ImageBackground>
    >;
    KeyboardAvoidingView: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.KeyboardAvoidingView>
    >;
    ListView: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.ListView>
    >;
    Modal: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.Modal>
    >;
    NavigatorIOS: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.NavigatorIOS>
    >;
    Pressable: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.Pressable>
    >;
    ProgressBarAndroid: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.ProgressBarAndroid>
    >;
    ProgressViewIOS: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.ProgressViewIOS>
    >;
    ScrollView: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.ScrollView>
    >;
    SegmentedControlIOS: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.SegmentedControlIOS>
    >;
    Slider: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.Slider>
    >;
    SliderIOS: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.Slider>
    >;
    SnapshotViewIOS: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.SnapshotViewIOS>
    >;
    Switch: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.Switch>
    >;
    RecyclerViewBackedScrollView: StyledTemplate<
      React.ComponentPropsWithRef<
        typeof ReactNative.RecyclerViewBackedScrollView
      >
    >;
    RefreshControl: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.RefreshControl>
    >;
    SafeAreaView: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.SafeAreaView>
    >;
    StatusBar: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.StatusBar>
    >;
    SwipeableListView: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.SwipeableListView>
    >;
    SwitchAndroid: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.Switch>
    >;
    SwitchIOS: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.SwitchIOS>
    >;
    TabBarIOS: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.TabBarIOS>
    >;
    Text: StyledTemplate<React.ComponentPropsWithRef<typeof ReactNative.Text>>;
    TextInput: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.TextInput>
    >;
    TouchableHighlight: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.TouchableHighlight>
    >;
    TouchableNativeFeedback: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.TouchableNativeFeedback>
    >;
    TouchableOpacity: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.TouchableOpacity>
    >;
    TouchableWithoutFeedback: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.TouchableWithoutFeedback>
    >;
    View: StyledTemplate<React.ComponentPropsWithRef<typeof ReactNative.View>>;
    ViewPagerAndroid: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.ViewPagerAndroid>
    >;
    FlatList: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.FlatList>
    >;
    SectionList: StyledTemplate<
      React.ComponentPropsWithRef<typeof ReactNative.SectionList>
    >;
  }

  const styled: StyledInterface;

  export const css: (
    strings: ReadonlyArray<string>,
    ...selectors: StyledTemplateArgument[]
  ) => string;

  export default styled;
}
