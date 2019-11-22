define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__flutter__material, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = packages__flutter__material.src__material__app;
  const theme_data = packages__flutter__material.src__material__theme_data;
  const colors = packages__flutter__material.src__material__colors;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const text_theme = packages__flutter__material.src__material__text_theme;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const material_localizations = packages__flutter__material.src__material__material_localizations;
  const drawer = packages__flutter__material.src__material__drawer;
  const drawer_header = packages__flutter__material.src__material__drawer_header;
  const list_tile = packages__flutter__material.src__material__list_tile;
  const icons = packages__flutter__material.src__material__icons;
  const flutter_logo = packages__flutter__material.src__material__flutter_logo;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const binding = packages__flutter__src__widgets__actions.src__widgets__binding;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const main = Object.create(dart.library);
  const $toList = dartx.toList;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let BuildContextToIconButton = () => (BuildContextToIconButton = dart.constFn(dart.fnType(icon_button.IconButton, [framework.BuildContext])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 30,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 13,
        [_Location_line]: 10,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "theme",
        [_Location_column]: 13,
        [_Location_line]: 11,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 13,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 9,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 36,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58834
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C12 || CT.C12
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 29,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 29,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 29,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 29,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16, C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 21,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 17,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 17,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textTheme",
        [_Location_column]: 17,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 17,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 17,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25, C26 || CT.C26, C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 49,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 44,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 33,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34, C35 || CT.C35], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C33 || CT.C33,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 53,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.constList([C38 || CT.C38], widget_inspector._Location);
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C37 || CT.C37,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 45,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 33,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 33,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44, C45 || CT.C45], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 53,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.constList([C48 || CT.C48], widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C47 || CT.C47,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 45,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 33,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 33,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54, C55 || CT.C55], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 53,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.constList([C58 || CT.C58], widget_inspector._Location);
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C57 || CT.C57,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 45,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 33,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 33,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64, C65 || CT.C65], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 21,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71, C72 || CT.C72], widget_inspector._Location);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C70 || CT.C70,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75, C76 || CT.C76], widget_inspector._Location);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C74 || CT.C74,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C78() {
      return C78 = dart.constList([], widget_inspector._Location);
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 41,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81], widget_inspector._Location);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C80 || CT.C80,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 44,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.constList([C84 || CT.C84], widget_inspector._Location);
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C83 || CT.C83,
        [_Location_name]: null,
        [_Location_column]: 39,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 29,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 29,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 29,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "contentPadding",
        [_Location_column]: 29,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 29,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.constList([C87 || CT.C87, C88 || CT.C88, C89 || CT.C89, C90 || CT.C90, C91 || CT.C91], widget_inspector._Location);
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C86 || CT.C86,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 93,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 41,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C94 || CT.C94,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 44,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.constList([C98 || CT.C98], widget_inspector._Location);
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C97 || CT.C97,
        [_Location_name]: null,
        [_Location_column]: 39,
        [_Location_line]: 105,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 29,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 29,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 29,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "contentPadding",
        [_Location_column]: 29,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 29,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.constList([C101 || CT.C101, C102 || CT.C102, C103 || CT.C103, C104 || CT.C104, C105 || CT.C105], widget_inspector._Location);
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C100 || CT.C100,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 102,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 41,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109], widget_inspector._Location);
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 113,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 44,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.constList([C112 || CT.C112], widget_inspector._Location);
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C111 || CT.C111,
        [_Location_name]: null,
        [_Location_column]: 39,
        [_Location_line]: 114,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 29,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 29,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 29,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "contentPadding",
        [_Location_column]: 29,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 29,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.constList([C115 || CT.C115, C116 || CT.C116, C117 || CT.C117, C118 || CT.C118, C119 || CT.C119], widget_inspector._Location);
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C114 || CT.C114,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 111,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 121,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 41,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.constList([C123 || CT.C123], widget_inspector._Location);
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 44,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.constList([C126 || CT.C126], widget_inspector._Location);
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C125 || CT.C125,
        [_Location_name]: null,
        [_Location_column]: 39,
        [_Location_line]: 123,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 29,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 29,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 29,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "contentPadding",
        [_Location_column]: 29,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 29,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.constList([C129 || CT.C129, C130 || CT.C130, C131 || CT.C131, C132 || CT.C132, C133 || CT.C133], widget_inspector._Location);
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C128 || CT.C128,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 120,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 41,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.constList([C137 || CT.C137], widget_inspector._Location);
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C136 || CT.C136,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 131,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 44,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.constList([C140 || CT.C140], widget_inspector._Location);
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C139 || CT.C139,
        [_Location_name]: null,
        [_Location_column]: 39,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 29,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 29,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 29,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "contentPadding",
        [_Location_column]: 29,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 29,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.constList([C143 || CT.C143, C144 || CT.C144, C145 || CT.C145, C146 || CT.C146, C147 || CT.C147], widget_inspector._Location);
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C142 || CT.C142,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.constList([C150 || CT.C150], widget_inspector._Location);
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C149 || CT.C149,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 89,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 13,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "drawerScrimColor",
        [_Location_column]: 13,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 13,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "drawer",
        [_Location_column]: 13,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 13,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.constList([C153 || CT.C153, C154 || CT.C154, C155 || CT.C155, C156 || CT.C156, C157 || CT.C157], widget_inspector._Location);
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C152 || CT.C152,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 3,
        [_Location_file]: "org-dartlang-app:///packages/blog/main.dart"
      });
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C6;
  let C7;
  let C4;
  let C3;
  main.MyApp = class MyApp extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({title: "Blog", theme: theme_data.ThemeData.new({primarySwatch: colors.Colors.blue}), home: new main.MyHomePage.new({title: "Myeong.", $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
    }
  };
  (main.MyApp.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.MyApp.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, "package:blog/main.dart");
  const title$ = dart.privateName(main, "MyHomePage.title");
  main.MyHomePage = class MyHomePage extends framework.StatefulWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    createState() {
      return new main._MyHomePageState.new();
    }
  };
  (main.MyHomePage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$] = title;
    main.MyHomePage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyHomePage.prototype;
  dart.addTypeTests(main.MyHomePage);
  dart.setMethodSignature(main.MyHomePage, () => ({
    __proto__: dart.getMethods(main.MyHomePage.__proto__),
    createState: dart.fnType(main._MyHomePageState, [])
  }));
  dart.setLibraryUri(main.MyHomePage, "package:blog/main.dart");
  dart.setFieldSignature(main.MyHomePage, () => ({
    __proto__: dart.getFields(main.MyHomePage.__proto__),
    title: dart.finalFieldType(core.String)
  }));
  const _counter = dart.privateName(main, "_counter");
  const _incrementCounter = dart.privateName(main, "_incrementCounter");
  let C10;
  let C9;
  let C8;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C12;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C11;
  let C15;
  let C16;
  let C17;
  let C18;
  let C14;
  let C13;
  let C21;
  let C20;
  let C19;
  let C24;
  let C25;
  let C26;
  let C27;
  let C28;
  let C23;
  let C22;
  let C31;
  let C30;
  let C29;
  let C34;
  let C35;
  let C33;
  let C32;
  let C38;
  let C37;
  let C36;
  let C41;
  let C40;
  let C39;
  let C44;
  let C45;
  let C43;
  let C42;
  let C48;
  let C47;
  let C46;
  let C51;
  let C50;
  let C49;
  let C54;
  let C55;
  let C53;
  let C52;
  let C58;
  let C57;
  let C56;
  let C61;
  let C60;
  let C59;
  let C64;
  let C65;
  let C63;
  let C62;
  let C68;
  let C67;
  let C66;
  let C71;
  let C72;
  let C70;
  let C69;
  let C75;
  let C76;
  let C74;
  let C73;
  let C78;
  let C77;
  let C81;
  let C80;
  let C79;
  let C84;
  let C83;
  let C82;
  let C87;
  let C88;
  let C89;
  let C90;
  let C91;
  let C86;
  let C85;
  let C92;
  let C95;
  let C94;
  let C93;
  let C98;
  let C97;
  let C96;
  let C101;
  let C102;
  let C103;
  let C104;
  let C105;
  let C100;
  let C99;
  let C106;
  let C109;
  let C108;
  let C107;
  let C112;
  let C111;
  let C110;
  let C115;
  let C116;
  let C117;
  let C118;
  let C119;
  let C114;
  let C113;
  let C120;
  let C123;
  let C122;
  let C121;
  let C126;
  let C125;
  let C124;
  let C129;
  let C130;
  let C131;
  let C132;
  let C133;
  let C128;
  let C127;
  let C134;
  let C137;
  let C136;
  let C135;
  let C140;
  let C139;
  let C138;
  let C143;
  let C144;
  let C145;
  let C146;
  let C147;
  let C142;
  let C141;
  let C150;
  let C149;
  let C148;
  let C153;
  let C154;
  let C155;
  let C156;
  let C157;
  let C152;
  let C151;
  main._MyHomePageState = class _MyHomePageState extends framework.State$(main.MyHomePage) {
    [_incrementCounter]() {
      this.setState(dart.fn(() => {
        this[_counter] = dart.notNull(this[_counter]) + 1;
      }, VoidToNull()));
    }
    build(context) {
      return new scaffold.Scaffold.new({backgroundColor: colors.Colors.white, drawerScrimColor: new ui.Color.new(0), appBar: new app_bar.AppBar.new({backgroundColor: colors.Colors.white, elevation: 0.0, textTheme: new text_theme.TextTheme.new({title: new text_style.TextStyle.new({fontSize: 20.0, color: colors.Colors.black})}), title: new text.Text.new(this.widget.title, {$creationLocationd_0dea112b090073317d4: C8 || CT.C8}), leading: new basic.Builder.new({builder: dart.fn(context => new icon_button.IconButton.new({color: colors.Colors.black, icon: C11 || CT.C11, onPressed: dart.fn(() => {
                scaffold.Scaffold.of(context).openDrawer();
              }, VoidToNull()), tooltip: material_localizations.MaterialLocalizations.of(context).openAppDrawerTooltip, $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), BuildContextToIconButton()), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), drawer: new basic.SizedBox.new({width: 100.0, child: new drawer.Drawer.new({elevation: 0.0, child: new scroll_view.ListView.new({children: JSArrayOfWidget().of([new drawer_header.DrawerHeader.new({child: new text.Text.new("DRAWER HEADER..", {$creationLocationd_0dea112b090073317d4: C29 || CT.C29}), decoration: new box_decoration.BoxDecoration.new({color: colors.Colors.black}), $creationLocationd_0dea112b090073317d4: C32 || CT.C32}), new list_tile.ListTile.new({leading: new icon.Icon.new(icons.Icons.home, {$creationLocationd_0dea112b090073317d4: C36 || CT.C36}), title: new text.Text.new("Home", {$creationLocationd_0dea112b090073317d4: C39 || CT.C39}), $creationLocationd_0dea112b090073317d4: C42 || CT.C42}), new list_tile.ListTile.new({leading: new icon.Icon.new(icons.Icons.home, {$creationLocationd_0dea112b090073317d4: C46 || CT.C46}), title: new text.Text.new("Archive", {$creationLocationd_0dea112b090073317d4: C49 || CT.C49}), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), new list_tile.ListTile.new({leading: new icon.Icon.new(icons.Icons.home, {$creationLocationd_0dea112b090073317d4: C56 || CT.C56}), title: new text.Text.new("About", {$creationLocationd_0dea112b090073317d4: C59 || CT.C59}), $creationLocationd_0dea112b090073317d4: C62 || CT.C62})]), $creationLocationd_0dea112b090073317d4: C66 || CT.C66}), $creationLocationd_0dea112b090073317d4: C69 || CT.C69}), $creationLocationd_0dea112b090073317d4: C73 || CT.C73}), body: new scroll_view.ListView.new({children: list_tile.ListTile.divideTiles({context: context, tiles: JSArrayOfWidget().of([new list_tile.ListTile.new({leading: new flutter_logo.FlutterLogo.new({$creationLocationd_0dea112b090073317d4: C77 || CT.C77}), title: new text.Text.new("Title", {$creationLocationd_0dea112b090073317d4: C79 || CT.C79}), subtitle: new text.Text.new("A strong animal", {$creationLocationd_0dea112b090073317d4: C82 || CT.C82}), contentPadding: new edge_insets.EdgeInsets.symmetric({horizontal: 19.0}), onTap: dart.fn(() => {
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C85 || CT.C85}), new list_tile.ListTile.new({leading: new flutter_logo.FlutterLogo.new({$creationLocationd_0dea112b090073317d4: C92 || CT.C92}), title: new text.Text.new("Title", {$creationLocationd_0dea112b090073317d4: C93 || CT.C93}), subtitle: new text.Text.new("A strong animal", {$creationLocationd_0dea112b090073317d4: C96 || CT.C96}), contentPadding: new edge_insets.EdgeInsets.symmetric({horizontal: 19.0}), onTap: dart.fn(() => {
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C99 || CT.C99}), new list_tile.ListTile.new({leading: new flutter_logo.FlutterLogo.new({$creationLocationd_0dea112b090073317d4: C106 || CT.C106}), title: new text.Text.new("Title", {$creationLocationd_0dea112b090073317d4: C107 || CT.C107}), subtitle: new text.Text.new("A strong animal", {$creationLocationd_0dea112b090073317d4: C110 || CT.C110}), contentPadding: new edge_insets.EdgeInsets.symmetric({horizontal: 19.0}), onTap: dart.fn(() => {
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C113 || CT.C113}), new list_tile.ListTile.new({leading: new flutter_logo.FlutterLogo.new({$creationLocationd_0dea112b090073317d4: C120 || CT.C120}), title: new text.Text.new("Title", {$creationLocationd_0dea112b090073317d4: C121 || CT.C121}), subtitle: new text.Text.new("A strong animal", {$creationLocationd_0dea112b090073317d4: C124 || CT.C124}), contentPadding: new edge_insets.EdgeInsets.symmetric({horizontal: 19.0}), onTap: dart.fn(() => {
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C127 || CT.C127}), new list_tile.ListTile.new({leading: new flutter_logo.FlutterLogo.new({$creationLocationd_0dea112b090073317d4: C134 || CT.C134}), title: new text.Text.new("Title", {$creationLocationd_0dea112b090073317d4: C135 || CT.C135}), subtitle: new text.Text.new("A strong animal", {$creationLocationd_0dea112b090073317d4: C138 || CT.C138}), contentPadding: new edge_insets.EdgeInsets.symmetric({horizontal: 19.0}), onTap: dart.fn(() => {
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C141 || CT.C141})])})[$toList](), $creationLocationd_0dea112b090073317d4: C148 || CT.C148}), $creationLocationd_0dea112b090073317d4: C151 || CT.C151});
    }
  };
  (main._MyHomePageState.new = function() {
    this[_counter] = 0;
    main._MyHomePageState.__proto__.new.call(this);
    ;
  }).prototype = main._MyHomePageState.prototype;
  dart.addTypeTests(main._MyHomePageState);
  dart.setMethodSignature(main._MyHomePageState, () => ({
    __proto__: dart.getMethods(main._MyHomePageState.__proto__),
    [_incrementCounter]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main._MyHomePageState, "package:blog/main.dart");
  dart.setFieldSignature(main._MyHomePageState, () => ({
    __proto__: dart.getFields(main._MyHomePageState.__proto__),
    [_counter]: dart.fieldType(core.int)
  }));
  let C158;
  main.main = function main$() {
    return binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: C158 || CT.C158}));
  };
  dart.trackLibraries("packages/blog/main", {
    "package:blog/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAO8B;AACtB,YAAO,iCACI,eACA,yCACmB,4BAEpB,gCAAkB;IAEhC;;;;;;EACJ;;;;;;;;;IAKiB;;;;;;;AAGqB;IAAkB;;;QALpC;QAAU;;;AAAU,mDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAc7C,MAFF,cAAS;AACC,QAAV,iBAAQ,aAAR,kBAAQ;;IAEZ;UAG0B;AACtB,YAAO,6CACqB,uCACN,iBAAM,YAChB,yCACoB,gCACb,gBACA,qCACA,wCAAoB,aAAoB,gCAE5C,kBAAK,AAAO,oFACV,gCACI,QAAc,WACZ,uCACW,qDAEH;AAAsC,gBAAxB,AAAY,qBAAT,OAAO;yCACJ,AAAY,gDAAT,OAAO,wOAKjD,+BACG,cACA,kCACQ,YACJ,wCAEe,sBACd,2CACe,kBAAK,yFACA,6CACE,gFAGtB,qCACa,kBAAW,mFACb,kBAAK,2HAEhB,qCACa,kBAAW,mFACb,kBAAK,8HAEhB,qCACa,kBAAW,mFACb,kBAAK,+SAM1B,wCACiB,AAiDjB,yCAhDW,OAAO,SACT,sBACH,qCACa,kGACF,kBAAK,6EACF,kBAAK,6FACY,kDAAsB,eAC1C;2FAIX,qCACa,kGACF,kBAAK,6EACF,kBAAK,6FACY,kDAAsB,eAC1C;2FAIX,qCACa,oGACF,kBAAK,+EACF,kBAAK,+FACY,kDAAsB,eAC1C;6FAIX,qCACa,oGACF,kBAAK,+EACF,kBAAK,+FACY,kDAAsB,eAC1C;6FAIX,qCACa,oGACF,kBAAK,+EACF,kBAAK,+FACY,kDAAsB,eAC1C;;IAQ/B;;;IAjHI,iBAAW;;;EAkHnB;;;;;;;;;;;;;;AA5Ie,0BAAO;EAAQ","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
