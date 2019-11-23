define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/gestures/arena', 'packages/flutter/material', 'packages/flutter/src/rendering/animated_size', 'packages/markdown/markdown'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter__src__gestures__arena, packages__flutter__material, packages__flutter__src__rendering__animated_size, packages__markdown__markdown) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const io = dart_sdk.io;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const table = packages__flutter__src__widgets__actions.src__widgets__table;
  const single_child_scroll_view = packages__flutter__src__widgets__actions.src__widgets__single_child_scroll_view;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const scroll_physics = packages__flutter__src__widgets__actions.src__widgets__scroll_physics;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const basic_types = packages__flutter__src__painting___network_image_web.src__painting__basic_types;
  const text_span = packages__flutter__src__painting___network_image_web.src__painting__text_span;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const inline_span = packages__flutter__src__painting___network_image_web.src__painting__inline_span;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const colors = packages__flutter__src__painting___network_image_web.src__painting__colors;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const decoration = packages__flutter__src__painting___network_image_web.src__painting__decoration;
  const recognizer = packages__flutter__src__gestures__arena.src__gestures__recognizer;
  const tap = packages__flutter__src__gestures__arena.src__gestures__tap;
  const scrollbar = packages__flutter__material.src__material__scrollbar;
  const icons = packages__flutter__material.src__material__icons;
  const theme = packages__flutter__material.src__material__theme;
  const colors$ = packages__flutter__material.src__material__colors;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const table$ = packages__flutter__src__rendering__animated_size.src__rendering__table;
  const wrap$ = packages__flutter__src__rendering__animated_size.src__rendering__wrap;
  const table_border = packages__flutter__src__rendering__animated_size.src__rendering__table_border;
  const ast = packages__markdown__markdown.src__ast;
  const extension_set = packages__markdown__markdown.src__extension_set;
  const document$ = packages__markdown__markdown.src__document;
  const inline_parser = packages__markdown__markdown.src__inline_parser;
  const builder$ = Object.create(dart.library);
  const widget = Object.create(dart.library);
  const style_sheet = Object.create(dart.library);
  const flutter_markdown = Object.create(dart.library);
  const $clear = dartx.clear;
  const $add = dartx.add;
  const $length = dartx.length;
  const $isEmpty = dartx.isEmpty;
  const $single = dartx.single;
  const $last = dartx.last;
  const $isNotEmpty = dartx.isNotEmpty;
  const $_get = dartx._get;
  const $modulo = dartx['%'];
  const $removeLast = dartx.removeLast;
  const $matchAsPrefix = dartx.matchAsPrefix;
  const $addAll = dartx.addAll;
  const $split = dartx.split;
  const $first = dartx.first;
  const $substring = dartx.substring;
  const $startsWith = dartx.startsWith;
  const $contains = dartx.contains;
  const $replaceAll = dartx.replaceAll;
  const $_set = dartx._set;
  const $trim = dartx.trim;
  const $runtimeType = dartx.runtimeType;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let JSArrayOfTableRow = () => (JSArrayOfTableRow = dart.constFn(_interceptors.JSArray$(table.TableRow)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let JSArrayOf_BlockElement = () => (JSArrayOf_BlockElement = dart.constFn(_interceptors.JSArray$(builder$._BlockElement)))();
  let JSArrayOf_TableElement = () => (JSArrayOf_TableElement = dart.constFn(_interceptors.JSArray$(builder$._TableElement)))();
  let JSArrayOf_InlineElement = () => (JSArrayOf_InlineElement = dart.constFn(_interceptors.JSArray$(builder$._InlineElement)))();
  let JSArrayOfGestureRecognizer = () => (JSArrayOfGestureRecognizer = dart.constFn(_interceptors.JSArray$(recognizer.GestureRecognizer)))();
  let ListOfTextSpan = () => (ListOfTextSpan = dart.constFn(core.List$(text_span.TextSpan)))();
  let JSArrayOfTextSpan = () => (JSArrayOfTextSpan = dart.constFn(_interceptors.JSArray$(text_span.TextSpan)))();
  let JSArrayOfInlineSyntax = () => (JSArrayOfInlineSyntax = dart.constFn(_interceptors.JSArray$(inline_parser.InlineSyntax)))();
  let ListOfGestureRecognizer = () => (ListOfGestureRecognizer = dart.constFn(core.List$(recognizer.GestureRecognizer)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let IdentityMapOfString$TextStyle = () => (IdentityMapOfString$TextStyle = dart.constFn(_js_helper.IdentityMap$(core.String, text_style.TextStyle)))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 27,
        [_Location_line]: 160,
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
        [_Location_column]: 18,
        [_Location_line]: 160,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollDirection",
        [_Location_column]: 11,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 160,
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
        [_Location_line]: 157,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 157,
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
        [_Location_column]: 15,
        [_Location_line]: 156,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textScaleFactor",
        [_Location_column]: 9,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 9,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 164,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 224,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 225,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 223,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 247,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 248,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 246,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 24,
        [_Location_line]: 250,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 250,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 245,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 244,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "defaultColumnWidth",
        [_Location_column]: 11,
        [_Location_line]: 256,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "defaultVerticalAlignment",
        [_Location_column]: 11,
        [_Location_line]: 257,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "border",
        [_Location_column]: 11,
        [_Location_line]: 258,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 259,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32, C33 || CT.C33, C34 || CT.C34, C35 || CT.C35], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 255,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 265,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 266,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.constList([C38 || CT.C38, C39 || CT.C39], widget_inspector._Location);
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C37 || CT.C37,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 264,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 11,
        [_Location_line]: 263,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 264,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42, C43 || CT.C43], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 262,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 11,
        [_Location_line]: 271,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 272,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C47 || CT.C47], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 270,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 11,
        [_Location_line]: 276,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 277,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50, C51 || CT.C51], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 275,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: text_span.TextSpan.prototype,
        [InlineSpan_style]: null,
        [TextSpan_semanticsLabel]: null,
        [TextSpan_recognizer]: null,
        [TextSpan_children]: null,
        [TextSpan_text]: "\n"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 39,
        [_Location_line]: 290,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 290,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "src",
        [_Location_column]: 33,
        [_Location_line]: 346,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 45,
        [_Location_line]: 346,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 59,
        [_Location_line]: 346,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.constList([C58 || CT.C58, C59 || CT.C59, C60 || CT.C60], widget_inspector._Location);
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C57 || CT.C57,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 346,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 32,
        [_Location_line]: 350,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 46,
        [_Location_line]: 350,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 60,
        [_Location_line]: 350,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63, C64 || CT.C64, C65 || CT.C65], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 350,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "src",
        [_Location_column]: 39,
        [_Location_line]: 356,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 51,
        [_Location_line]: 356,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 65,
        [_Location_line]: 356,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68, C69 || CT.C69, C70 || CT.C70], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 356,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "file",
        [_Location_column]: 33,
        [_Location_line]: 358,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 51,
        [_Location_line]: 358,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 65,
        [_Location_line]: 358,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73, C74 || CT.C74, C75 || CT.C75], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C72 || CT.C72,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 358,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 30,
        [_Location_line]: 364,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 44,
        [_Location_line]: 364,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78, C79 || CT.C79], widget_inspector._Location);
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C77 || CT.C77,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 364,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bytes",
        [_Location_column]: 18,
        [_Location_line]: 375,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 9,
        [_Location_line]: 376,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 377,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82, C83 || CT.C83, C84 || CT.C84], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 374,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 28,
        [_Location_line]: 380,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.constList([C87 || CT.C87], widget_inspector._Location);
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C86 || CT.C86,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 380,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 4,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 17,
        [_Location_line]: 392,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 9,
        [_Location_line]: 393,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 394,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.constList([C91 || CT.C91, C92 || CT.C92, C93 || CT.C93], widget_inspector._Location);
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C90 || CT.C90,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 391,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 390,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 391,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.constList([C96 || CT.C96, C97 || CT.C97], widget_inspector._Location);
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C95 || CT.C95,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 389,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 9,
        [_Location_line]: 402,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 9,
        [_Location_line]: 403,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 404,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.constList([C100 || CT.C100, C101 || CT.C101, C102 || CT.C102], widget_inspector._Location);
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 401,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 24,
        [_Location_line]: 412,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 9,
        [_Location_line]: 413,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 414,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.constList([C105 || CT.C105, C106 || CT.C106, C107 || CT.C107], widget_inspector._Location);
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C104 || CT.C104,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 411,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 410,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 411,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.constList([C110 || CT.C110, C111 || CT.C111], widget_inspector._Location);
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C109 || CT.C109,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 409,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 426,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.constList([C114 || CT.C114], widget_inspector._Location);
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C113 || CT.C113,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 426,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 11,
        [_Location_line]: 424,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 11,
        [_Location_line]: 425,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 426,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.constList([C117 || CT.C117, C118 || CT.C118, C119 || CT.C119], widget_inspector._Location);
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C116 || CT.C116,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 423,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 422,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 423,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.constList([C122 || CT.C122, C123 || CT.C123], widget_inspector._Location);
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C121 || CT.C121,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 421,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 421,
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
        [_Location_column]: 12,
        [_Location_line]: 420,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 36,
        [_Location_line]: 444,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.constList([C129 || CT.C129], widget_inspector._Location);
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C128 || CT.C128,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 444,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 457,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 458,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.constList([C132 || CT.C132, C133 || CT.C133], widget_inspector._Location);
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C131 || CT.C131,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 456,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textScaleFactor",
        [_Location_column]: 11,
        [_Location_line]: 480,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 11,
        [_Location_line]: 481,
        [_Location_file]: null
      });
    },
    get C135() {
      return C135 = dart.constList([C136 || CT.C136, C137 || CT.C137], widget_inspector._Location);
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C135 || CT.C135,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 479,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/builder.dart"
      });
    },
    get C138() {
      return C138 = dart.constList(["p", "h1", "h2", "h3", "h4", "h5", "h6", "li", "blockquote", "pre", "ol", "ul", "hr", "table", "thead", "tbody", "tr"], core.String);
    },
    get C139() {
      return C139 = dart.constList(["ul", "ol"], core.String);
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 7,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 7,
        [_Location_line]: 220,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.constList([C142 || CT.C142, C143 || CT.C143, C144 || CT.C144], widget_inspector._Location);
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C141 || CT.C141,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 218,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/widget.dart"
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 16,
        [EdgeInsets_left]: 16
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 279,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 7,
        [_Location_line]: 280,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shrinkWrap",
        [_Location_column]: 7,
        [_Location_line]: 281,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 282,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.constList([C148 || CT.C148, C149 || CT.C149, C150 || CT.C150, C151 || CT.C151], widget_inspector._Location);
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C147 || CT.C147,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 278,
        [_Location_file]: "org-dartlang-app:///packages/flutter_markdown/src/widget.dart"
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293128957.0
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4290502395.0
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4287679225.0
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4284790262.0
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4282557941.0
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4280391411.0
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4280191205.0
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4279858898.0
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4279592384.0
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4279060385.0
      });
    },
    get C154() {
      return C154 = dart.constMap(core.int, ui.Color, [50, C155 || CT.C155, 100, C156 || CT.C156, 200, C157 || CT.C157, 300, C158 || CT.C158, 400, C159 || CT.C159, 500, C160 || CT.C160, 600, C161 || CT.C161, 700, C162 || CT.C162, 800, C163 || CT.C163, 900, C164 || CT.C164]);
    },
    get C153() {
      return C153 = dart.const({
        __proto__: colors$.MaterialColor.prototype,
        [Color_value]: 4280391411.0,
        [ColorSwatch__swatch]: C154 || CT.C154
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C153 || CT.C153,
        [TextStyle_inherit]: true
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: ui.FontStyle.prototype,
        [_name]: "FontStyle.italic",
        index: 1
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: C166 || CT.C166,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 6
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C168 || CT.C168,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: ui.TextDecoration.prototype,
        [TextDecoration__mask]: 4
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C170 || CT.C170,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 5
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C172 || CT.C172,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 16
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 8
      });
    }
  });
  builder$._BlockElement = class _BlockElement extends core.Object {};
  (builder$._BlockElement.new = function(tag) {
    this.children = JSArrayOfWidget().of([]);
    this.nextListIndex = 0;
    this.tag = tag;
    ;
  }).prototype = builder$._BlockElement.prototype;
  dart.addTypeTests(builder$._BlockElement);
  dart.setLibraryUri(builder$._BlockElement, "package:flutter_markdown/src/builder.dart");
  dart.setFieldSignature(builder$._BlockElement, () => ({
    __proto__: dart.getFields(builder$._BlockElement.__proto__),
    tag: dart.finalFieldType(core.String),
    children: dart.finalFieldType(core.List$(framework.Widget)),
    nextListIndex: dart.fieldType(core.int)
  }));
  builder$._TableElement = class _TableElement extends core.Object {};
  (builder$._TableElement.new = function() {
    this.rows = JSArrayOfTableRow().of([]);
    ;
  }).prototype = builder$._TableElement.prototype;
  dart.addTypeTests(builder$._TableElement);
  dart.setLibraryUri(builder$._TableElement, "package:flutter_markdown/src/builder.dart");
  dart.setFieldSignature(builder$._TableElement, () => ({
    __proto__: dart.getFields(builder$._TableElement.__proto__),
    rows: dart.finalFieldType(core.List$(table.TableRow))
  }));
  builder$._InlineElement = class _InlineElement extends core.Object {};
  (builder$._InlineElement.new = function(tag, opts) {
    let style = opts && 'style' in opts ? opts.style : null;
    this.children = JSArrayOfWidget().of([]);
    this.tag = tag;
    this.style = style;
    ;
  }).prototype = builder$._InlineElement.prototype;
  dart.addTypeTests(builder$._InlineElement);
  dart.setLibraryUri(builder$._InlineElement, "package:flutter_markdown/src/builder.dart");
  dart.setFieldSignature(builder$._InlineElement, () => ({
    __proto__: dart.getFields(builder$._InlineElement.__proto__),
    tag: dart.finalFieldType(core.String),
    style: dart.finalFieldType(text_style.TextStyle),
    children: dart.finalFieldType(core.List$(framework.Widget))
  }));
  builder$.MarkdownBuilderDelegate = class MarkdownBuilderDelegate extends core.Object {};
  (builder$.MarkdownBuilderDelegate.new = function() {
    ;
  }).prototype = builder$.MarkdownBuilderDelegate.prototype;
  dart.addTypeTests(builder$.MarkdownBuilderDelegate);
  dart.setLibraryUri(builder$.MarkdownBuilderDelegate, "package:flutter_markdown/src/builder.dart");
  const _listIndents = dart.privateName(builder$, "_listIndents");
  const _blocks = dart.privateName(builder$, "_blocks");
  const _tables = dart.privateName(builder$, "_tables");
  const _inlines = dart.privateName(builder$, "_inlines");
  const _linkHandlers = dart.privateName(builder$, "_linkHandlers");
  const _addParentInlineIfNeeded = dart.privateName(builder$, "_addParentInlineIfNeeded");
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
  let C10;
  let C9;
  let C8;
  let C13;
  let C14;
  let C12;
  let C11;
  const _addAnonymousBlockIfNeeded = dart.privateName(builder$, "_addAnonymousBlockIfNeeded");
  let C17;
  let C18;
  let C16;
  let C15;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  const SizedBox_height = dart.privateName(basic, "SizedBox.height");
  const SizedBox_width = dart.privateName(basic, "SizedBox.width");
  let C19;
  const _buildCheckbox = dart.privateName(builder$, "_buildCheckbox");
  const _buildBullet = dart.privateName(builder$, "_buildBullet");
  let C22;
  let C23;
  let C21;
  let C20;
  let C26;
  let C25;
  let C24;
  let C29;
  let C28;
  let C27;
  let C32;
  let C33;
  let C34;
  let C35;
  let C31;
  let C30;
  let C38;
  let C39;
  let C37;
  let C36;
  let C42;
  let C43;
  let C41;
  let C40;
  let C46;
  let C47;
  let C45;
  let C44;
  let C50;
  let C51;
  let C49;
  let C48;
  const _addBlockChild = dart.privateName(builder$, "_addBlockChild");
  const _buildImage = dart.privateName(builder$, "_buildImage");
  const InlineSpan_style = dart.privateName(inline_span, "InlineSpan.style");
  const TextSpan_semanticsLabel = dart.privateName(text_span, "TextSpan.semanticsLabel");
  const TextSpan_recognizer = dart.privateName(text_span, "TextSpan.recognizer");
  const TextSpan_children = dart.privateName(text_span, "TextSpan.children");
  const TextSpan_text = dart.privateName(text_span, "TextSpan.text");
  let C52;
  let C55;
  let C54;
  let C53;
  const _mergeInlineChildren = dart.privateName(builder$, "_mergeInlineChildren");
  const _buildTableCell = dart.privateName(builder$, "_buildTableCell");
  let C58;
  let C59;
  let C60;
  let C57;
  let C56;
  const _handleDataSchemeUri = dart.privateName(builder$, "_handleDataSchemeUri");
  let C63;
  let C64;
  let C65;
  let C62;
  let C61;
  let C68;
  let C69;
  let C70;
  let C67;
  let C66;
  let C73;
  let C74;
  let C75;
  let C72;
  let C71;
  let C78;
  let C79;
  let C77;
  let C76;
  let C82;
  let C83;
  let C84;
  let C81;
  let C80;
  let C87;
  let C86;
  let C85;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C88;
  let C91;
  let C92;
  let C93;
  let C90;
  let C89;
  let C96;
  let C97;
  let C95;
  let C94;
  let C100;
  let C101;
  let C102;
  let C99;
  let C98;
  let C105;
  let C106;
  let C107;
  let C104;
  let C103;
  let C110;
  let C111;
  let C109;
  let C108;
  let C114;
  let C113;
  let C112;
  let C117;
  let C118;
  let C119;
  let C116;
  let C115;
  let C122;
  let C123;
  let C121;
  let C120;
  let C126;
  let C125;
  let C124;
  let C129;
  let C128;
  let C127;
  let C132;
  let C133;
  let C131;
  let C130;
  let C136;
  let C137;
  let C135;
  let C134;
  const delegate$ = dart.privateName(builder$, "MarkdownBuilder.delegate");
  const styleSheet$ = dart.privateName(builder$, "MarkdownBuilder.styleSheet");
  const imageDirectory$ = dart.privateName(builder$, "MarkdownBuilder.imageDirectory");
  const imageBuilder$ = dart.privateName(builder$, "MarkdownBuilder.imageBuilder");
  const checkboxBuilder$ = dart.privateName(builder$, "MarkdownBuilder.checkboxBuilder");
  builder$.MarkdownBuilder = class MarkdownBuilder extends core.Object {
    get delegate() {
      return this[delegate$];
    }
    set delegate(value) {
      super.delegate = value;
    }
    get styleSheet() {
      return this[styleSheet$];
    }
    set styleSheet(value) {
      super.styleSheet = value;
    }
    get imageDirectory() {
      return this[imageDirectory$];
    }
    set imageDirectory(value) {
      super.imageDirectory = value;
    }
    get imageBuilder() {
      return this[imageBuilder$];
    }
    set imageBuilder(value) {
      super.imageBuilder = value;
    }
    get checkboxBuilder() {
      return this[checkboxBuilder$];
    }
    set checkboxBuilder(value) {
      super.checkboxBuilder = value;
    }
    build(nodes) {
      this[_listIndents][$clear]();
      this[_blocks][$clear]();
      this[_tables][$clear]();
      this[_inlines][$clear]();
      this[_linkHandlers][$clear]();
      this[_blocks][$add](new builder$._BlockElement.new(null));
      for (let node of nodes) {
        if (!(this[_blocks][$length] === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_markdown/src/builder.dart", 138, 14, "_blocks.length == 1");
        node.accept(this);
      }
      if (!dart.test(this[_tables][$isEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_markdown/src/builder.dart", 142, 12, "_tables.isEmpty");
      if (!dart.test(this[_inlines][$isEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_markdown/src/builder.dart", 143, 12, "_inlines.isEmpty");
      return this[_blocks][$single].children;
    }
    visitText(text) {
      if (this[_blocks][$last].tag == null) return;
      this[_addParentInlineIfNeeded](this[_blocks][$last].tag);
      let child = null;
      if (this[_blocks][$last].tag === "pre") {
        child = new scrollbar.Scrollbar.new({child: new single_child_scroll_view.SingleChildScrollView.new({scrollDirection: basic_types.Axis.horizontal, padding: this.styleSheet.codeblockPadding, child: new basic.RichText.new({text: this.delegate.formatText(this.styleSheet, text.text), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), $creationLocationd_0dea112b090073317d4: C8 || CT.C8});
      } else {
        child = new basic.RichText.new({textScaleFactor: this.styleSheet.textScaleFactor, text: new text_span.TextSpan.new({style: this[_inlines][$last].style, text: text.text, recognizer: dart.test(this[_linkHandlers][$isNotEmpty]) ? this[_linkHandlers][$last] : null}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11});
      }
      this[_inlines][$last].children[$add](child);
    }
    visitElementBefore(element) {
      let tag = element.tag;
      if (dart.test(builder$._isBlockTag(tag))) {
        this[_addAnonymousBlockIfNeeded](this.styleSheet.styles[$_get](tag));
        if (dart.test(builder$._isListTag(tag))) {
          this[_listIndents][$add](tag);
        } else if (tag === "table") {
          this[_tables][$add](new builder$._TableElement.new());
        } else if (tag === "tr") {
          let length = this[_tables][$single].rows[$length];
          let decoration = box_decoration.BoxDecoration._check(this.styleSheet.tableCellsDecoration);
          if (length === 0 || length[$modulo](2) === 1) decoration = null;
          this[_tables][$single].rows[$add](new table.TableRow.new({decoration: decoration, children: JSArrayOfWidget().of([])}));
        }
        this[_blocks][$add](new builder$._BlockElement.new(tag));
      } else {
        this[_addParentInlineIfNeeded](this[_blocks][$last].tag);
        let parentStyle = this[_inlines][$last].style;
        this[_inlines][$add](new builder$._InlineElement.new(tag, {style: parentStyle.merge(this.styleSheet.styles[$_get](tag))}));
      }
      if (tag === "a") {
        this[_linkHandlers][$add](this.delegate.createLink(element.attributes[$_get]("href")));
      }
      return true;
    }
    visitElementAfter(element) {
      let tag = element.tag;
      if (dart.test(builder$._isBlockTag(tag))) {
        this[_addAnonymousBlockIfNeeded](this.styleSheet.styles[$_get](tag));
        let current = this[_blocks][$removeLast]();
        let child = null;
        if (dart.test(current.children[$isNotEmpty])) {
          child = new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: current.children, $creationLocationd_0dea112b090073317d4: C15 || CT.C15});
        } else {
          child = C19 || CT.C19;
        }
        if (dart.test(builder$._isListTag(tag))) {
          if (!dart.test(this[_listIndents][$isNotEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_markdown/src/builder.dart", 232, 16, "_listIndents.isNotEmpty");
          this[_listIndents][$removeLast]();
        } else if (tag === "li") {
          if (dart.test(this[_listIndents][$isNotEmpty])) {
            let bullet = null;
            let el = element.children[$_get](0);
            if (ast.Element.is(el) && el.attributes[$_get]("type") === "checkbox") {
              let val = el.attributes[$_get]("checked") !== "false";
              bullet = this[_buildCheckbox](val);
            } else {
              bullet = this[_buildBullet](this[_listIndents][$last]);
            }
            child = new basic.Row.new({children: JSArrayOfWidget().of([new basic.SizedBox.new({width: this.styleSheet.listIndent, child: bullet, $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), new basic.Expanded.new({child: child, $creationLocationd_0dea112b090073317d4: C24 || CT.C24})]), $creationLocationd_0dea112b090073317d4: C27 || CT.C27});
          }
        } else if (tag === "table") {
          child = new table.Table.new({defaultColumnWidth: new table$.IntrinsicColumnWidth.new(), defaultVerticalAlignment: table$.TableCellVerticalAlignment.middle, border: this.styleSheet.tableBorder, children: this[_tables][$removeLast]().rows, $creationLocationd_0dea112b090073317d4: C30 || CT.C30});
        } else if (tag === "blockquote") {
          child = new container.DecoratedBox.new({decoration: this.styleSheet.blockquoteDecoration, child: new basic.Padding.new({padding: this.styleSheet.blockquotePadding, child: child, $creationLocationd_0dea112b090073317d4: C36 || CT.C36}), $creationLocationd_0dea112b090073317d4: C40 || CT.C40});
        } else if (tag === "pre") {
          child = new container.DecoratedBox.new({decoration: this.styleSheet.codeblockDecoration, child: child, $creationLocationd_0dea112b090073317d4: C44 || CT.C44});
        } else if (tag === "hr") {
          child = new container.DecoratedBox.new({decoration: this.styleSheet.horizontalRuleDecoration, child: child, $creationLocationd_0dea112b090073317d4: C48 || CT.C48});
        }
        this[_addBlockChild](child);
      } else {
        let current = this[_inlines][$removeLast]();
        let parent = this[_inlines][$last];
        if (tag === "img") {
          current.children[$add](this[_buildImage](element.attributes[$_get]("src")));
        } else if (tag === "br") {
          current.children[$add](new basic.RichText.new({text: C52 || CT.C52, $creationLocationd_0dea112b090073317d4: C53 || CT.C53}));
        } else if (tag === "th" || tag === "td") {
          let align = null;
          let style = element.attributes[$_get]("style");
          if (style == null) {
            align = tag === "th" ? this.styleSheet.tableHeadAlign : ui.TextAlign.left;
          } else {
            let regExp = core.RegExp.new("text-align: (left|center|right)");
            let match = regExp[$matchAsPrefix](style);
            switch (match._get(1)) {
              case "left":
              {
                align = ui.TextAlign.left;
                break;
              }
              case "center":
              {
                align = ui.TextAlign.center;
                break;
              }
              case "right":
              {
                align = ui.TextAlign.right;
                break;
              }
            }
          }
          let child = this[_buildTableCell](this[_mergeInlineChildren](current.children), {textAlign: align});
          this[_tables][$single].rows[$last].children[$add](child);
        } else if (tag === "a") {
          this[_linkHandlers][$removeLast]();
        }
        if (dart.test(current.children[$isNotEmpty])) {
          parent.children[$addAll](current.children);
        }
      }
    }
    [_buildImage](src) {
      let parts = src[$split]("#");
      if (dart.test(parts[$isEmpty])) return C19 || CT.C19;
      let path = parts[$first];
      let width = null;
      let height = null;
      if (parts[$length] === 2) {
        let dimensions = parts[$last][$split]("x");
        if (dimensions[$length] === 2) {
          width = core.double.parse(dimensions[$_get](0));
          height = core.double.parse(dimensions[$_get](1));
        }
      }
      let uri = core.Uri.parse(path);
      let child = null;
      if (this.imageBuilder != null) {
        child = this.imageBuilder(uri);
      } else if (uri.scheme === "http" || uri.scheme === "https") {
        child = new image.Image.network(dart.toString(uri), {width: width, height: height, $creationLocationd_0dea112b090073317d4: C56 || CT.C56});
      } else if (uri.scheme === "data") {
        child = this[_handleDataSchemeUri](uri, width, height);
      } else if (uri.scheme === "resource") {
        child = new image.Image.asset(path[$substring](9), {width: width, height: height, $creationLocationd_0dea112b090073317d4: C61 || CT.C61});
      } else {
        let fileUri = this.imageDirectory != null ? core.Uri.parse(dart.notNull(this.imageDirectory) + dart.notNull(dart.toString(uri))) : uri;
        if (fileUri.scheme === "http" || fileUri.scheme === "https") {
          child = new image.Image.network(dart.toString(fileUri), {width: width, height: height, $creationLocationd_0dea112b090073317d4: C66 || CT.C66});
        } else {
          child = new image.Image.file(io.File.fromUri(fileUri), {width: width, height: height, $creationLocationd_0dea112b090073317d4: C71 || CT.C71});
        }
      }
      if (dart.test(this[_linkHandlers][$isNotEmpty])) {
        let recognizer = tap.TapGestureRecognizer._check(this[_linkHandlers][$last]);
        return new gesture_detector.GestureDetector.new({child: child, onTap: recognizer.onTap, $creationLocationd_0dea112b090073317d4: C76 || CT.C76});
      } else {
        return child;
      }
    }
    [_handleDataSchemeUri](uri, width, height) {
      let mimeType = uri.data.mimeType;
      if (mimeType[$startsWith]("image/")) {
        return new image.Image.memory(uri.data.contentAsBytes(), {width: width, height: height, $creationLocationd_0dea112b090073317d4: C80 || CT.C80});
      } else if (mimeType[$startsWith]("text/")) {
        return new text.Text.new(uri.data.contentAsString(), {$creationLocationd_0dea112b090073317d4: C85 || CT.C85});
      }
      return C19 || CT.C19;
    }
    [_buildCheckbox](checked) {
      if (this.checkboxBuilder != null) {
        return this.checkboxBuilder(checked);
      }
      return new basic.Padding.new({padding: C88 || CT.C88, child: new icon.Icon.new(dart.test(checked) ? icons.Icons.check_box : icons.Icons.check_box_outline_blank, {size: this.styleSheet.checkbox.fontSize, color: this.styleSheet.checkbox.color, $creationLocationd_0dea112b090073317d4: C89 || CT.C89}), $creationLocationd_0dea112b090073317d4: C94 || CT.C94});
    }
    [_buildBullet](listTag) {
      if (listTag === "ul") {
        return new text.Text.new("•", {textAlign: ui.TextAlign.center, style: this.styleSheet.listBullet, $creationLocationd_0dea112b090073317d4: C98 || CT.C98});
      }
      let index = this[_blocks][$last].nextListIndex;
      return new basic.Padding.new({padding: C88 || CT.C88, child: new text.Text.new(dart.str(dart.notNull(index) + 1) + ".", {textAlign: ui.TextAlign.right, style: this.styleSheet.listBullet, $creationLocationd_0dea112b090073317d4: C103 || CT.C103}), $creationLocationd_0dea112b090073317d4: C108 || CT.C108});
    }
    [_buildTableCell](children, opts) {
      let textAlign = opts && 'textAlign' in opts ? opts.textAlign : null;
      return new table.TableCell.new({child: new basic.Padding.new({padding: this.styleSheet.tableCellsPadding, child: new text.DefaultTextStyle.new({style: this.styleSheet.tableBody, textAlign: textAlign, child: new basic.Wrap.new({children: children, $creationLocationd_0dea112b090073317d4: C112 || CT.C112}), $creationLocationd_0dea112b090073317d4: C115 || CT.C115}), $creationLocationd_0dea112b090073317d4: C120 || CT.C120}), $creationLocationd_0dea112b090073317d4: C124 || CT.C124});
    }
    [_addParentInlineIfNeeded](tag) {
      if (dart.test(this[_inlines][$isEmpty])) {
        this[_inlines][$add](new builder$._InlineElement.new(tag, {style: this.styleSheet.styles[$_get](tag)}));
      }
    }
    [_addBlockChild](child) {
      let t0;
      let parent = this[_blocks][$last];
      if (dart.test(parent.children[$isNotEmpty])) {
        parent.children[$add](new basic.SizedBox.new({height: this.styleSheet.blockSpacing, $creationLocationd_0dea112b090073317d4: C127 || CT.C127}));
      }
      parent.children[$add](child);
      t0 = parent;
      t0.nextListIndex = dart.notNull(t0.nextListIndex) + 1;
    }
    [_addAnonymousBlockIfNeeded](style) {
      if (dart.test(this[_inlines][$isEmpty])) return;
      let inline = this[_inlines][$single];
      if (dart.test(inline.children[$isNotEmpty])) {
        let mergedInlines = this[_mergeInlineChildren](inline.children);
        let wrap = new basic.Wrap.new({crossAxisAlignment: wrap$.WrapCrossAlignment.center, children: mergedInlines, $creationLocationd_0dea112b090073317d4: C130 || CT.C130});
        this[_addBlockChild](wrap);
        this[_inlines][$clear]();
      }
    }
    [_mergeInlineChildren](children) {
      let mergedTexts = JSArrayOfWidget().of([]);
      for (let child of children) {
        if (dart.test(mergedTexts[$isNotEmpty]) && basic.RichText.is(mergedTexts[$last]) && basic.RichText.is(child)) {
          let previous = basic.RichText._check(mergedTexts[$removeLast]());
          let previousTextSpan = text_span.TextSpan._check(previous.text);
          let children = previousTextSpan.children != null ? ListOfTextSpan().from(previousTextSpan.children) : JSArrayOfTextSpan().of([previousTextSpan]);
          children[$add](text_span.TextSpan._check(child.text));
          let mergedSpan = new text_span.TextSpan.new({children: children});
          mergedTexts[$add](new basic.RichText.new({textScaleFactor: this.styleSheet.textScaleFactor, text: mergedSpan, $creationLocationd_0dea112b090073317d4: C134 || CT.C134}));
        } else {
          mergedTexts[$add](child);
        }
      }
      return mergedTexts;
    }
  };
  (builder$.MarkdownBuilder.new = function(opts) {
    let delegate = opts && 'delegate' in opts ? opts.delegate : null;
    let styleSheet = opts && 'styleSheet' in opts ? opts.styleSheet : null;
    let imageDirectory = opts && 'imageDirectory' in opts ? opts.imageDirectory : null;
    let imageBuilder = opts && 'imageBuilder' in opts ? opts.imageBuilder : null;
    let checkboxBuilder = opts && 'checkboxBuilder' in opts ? opts.checkboxBuilder : null;
    this[_listIndents] = JSArrayOfString().of([]);
    this[_blocks] = JSArrayOf_BlockElement().of([]);
    this[_tables] = JSArrayOf_TableElement().of([]);
    this[_inlines] = JSArrayOf_InlineElement().of([]);
    this[_linkHandlers] = JSArrayOfGestureRecognizer().of([]);
    this[delegate$] = delegate;
    this[styleSheet$] = styleSheet;
    this[imageDirectory$] = imageDirectory;
    this[imageBuilder$] = imageBuilder;
    this[checkboxBuilder$] = checkboxBuilder;
    ;
  }).prototype = builder$.MarkdownBuilder.prototype;
  dart.addTypeTests(builder$.MarkdownBuilder);
  builder$.MarkdownBuilder[dart.implements] = () => [ast.NodeVisitor];
  dart.setMethodSignature(builder$.MarkdownBuilder, () => ({
    __proto__: dart.getMethods(builder$.MarkdownBuilder.__proto__),
    build: dart.fnType(core.List$(framework.Widget), [core.List$(ast.Node)]),
    visitText: dart.fnType(dart.void, [ast.Text]),
    visitElementBefore: dart.fnType(core.bool, [ast.Element]),
    visitElementAfter: dart.fnType(dart.void, [ast.Element]),
    [_buildImage]: dart.fnType(framework.Widget, [core.String]),
    [_handleDataSchemeUri]: dart.fnType(framework.Widget, [core.Uri, core.double, core.double]),
    [_buildCheckbox]: dart.fnType(framework.Widget, [core.bool]),
    [_buildBullet]: dart.fnType(framework.Widget, [core.String]),
    [_buildTableCell]: dart.fnType(framework.Widget, [core.List$(framework.Widget)], {textAlign: ui.TextAlign}, {}),
    [_addParentInlineIfNeeded]: dart.fnType(dart.void, [core.String]),
    [_addBlockChild]: dart.fnType(dart.void, [framework.Widget]),
    [_addAnonymousBlockIfNeeded]: dart.fnType(dart.void, [text_style.TextStyle]),
    [_mergeInlineChildren]: dart.fnType(core.List$(framework.Widget), [core.List$(framework.Widget)])
  }));
  dart.setLibraryUri(builder$.MarkdownBuilder, "package:flutter_markdown/src/builder.dart");
  dart.setFieldSignature(builder$.MarkdownBuilder, () => ({
    __proto__: dart.getFields(builder$.MarkdownBuilder.__proto__),
    delegate: dart.finalFieldType(builder$.MarkdownBuilderDelegate),
    styleSheet: dart.finalFieldType(style_sheet.MarkdownStyleSheet),
    imageDirectory: dart.finalFieldType(core.String),
    imageBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [core.Uri])),
    checkboxBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [core.bool])),
    [_listIndents]: dart.finalFieldType(core.List$(core.String)),
    [_blocks]: dart.finalFieldType(core.List$(builder$._BlockElement)),
    [_tables]: dart.finalFieldType(core.List$(builder$._TableElement)),
    [_inlines]: dart.finalFieldType(core.List$(builder$._InlineElement)),
    [_linkHandlers]: dart.finalFieldType(core.List$(recognizer.GestureRecognizer))
  }));
  builder$._isBlockTag = function _isBlockTag(tag) {
    return builder$._kBlockTags[$contains](tag);
  };
  builder$._isListTag = function _isListTag(tag) {
    return builder$._kListTags[$contains](tag);
  };
  let C138;
  let C139;
  dart.defineLazy(builder$, {
    /*builder$._kBlockTags*/get _kBlockTags() {
      return C138 || CT.C138;
    },
    /*builder$._kListTags*/get _kListTags() {
      return C139 || CT.C139;
    }
  });
  widget.SyntaxHighlighter = class SyntaxHighlighter extends core.Object {};
  (widget.SyntaxHighlighter.new = function() {
    ;
  }).prototype = widget.SyntaxHighlighter.prototype;
  dart.addTypeTests(widget.SyntaxHighlighter);
  dart.setLibraryUri(widget.SyntaxHighlighter, "package:flutter_markdown/src/widget.dart");
  const data$ = dart.privateName(widget, "MarkdownWidget.data");
  const styleSheet$0 = dart.privateName(widget, "MarkdownWidget.styleSheet");
  const syntaxHighlighter$ = dart.privateName(widget, "MarkdownWidget.syntaxHighlighter");
  const onTapLink$ = dart.privateName(widget, "MarkdownWidget.onTapLink");
  const imageDirectory$0 = dart.privateName(widget, "MarkdownWidget.imageDirectory");
  const extensionSet$ = dart.privateName(widget, "MarkdownWidget.extensionSet");
  const imageBuilder$0 = dart.privateName(widget, "MarkdownWidget.imageBuilder");
  const checkboxBuilder$0 = dart.privateName(widget, "MarkdownWidget.checkboxBuilder");
  widget.MarkdownWidget = class MarkdownWidget extends framework.StatefulWidget {
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    get styleSheet() {
      return this[styleSheet$0];
    }
    set styleSheet(value) {
      super.styleSheet = value;
    }
    get syntaxHighlighter() {
      return this[syntaxHighlighter$];
    }
    set syntaxHighlighter(value) {
      super.syntaxHighlighter = value;
    }
    get onTapLink() {
      return this[onTapLink$];
    }
    set onTapLink(value) {
      super.onTapLink = value;
    }
    get imageDirectory() {
      return this[imageDirectory$0];
    }
    set imageDirectory(value) {
      super.imageDirectory = value;
    }
    get extensionSet() {
      return this[extensionSet$];
    }
    set extensionSet(value) {
      super.extensionSet = value;
    }
    get imageBuilder() {
      return this[imageBuilder$0];
    }
    set imageBuilder(value) {
      super.imageBuilder = value;
    }
    get checkboxBuilder() {
      return this[checkboxBuilder$0];
    }
    set checkboxBuilder(value) {
      super.checkboxBuilder = value;
    }
    createState() {
      return new widget._MarkdownWidgetState.new();
    }
  };
  (widget.MarkdownWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let data = opts && 'data' in opts ? opts.data : null;
    let styleSheet = opts && 'styleSheet' in opts ? opts.styleSheet : null;
    let syntaxHighlighter = opts && 'syntaxHighlighter' in opts ? opts.syntaxHighlighter : null;
    let onTapLink = opts && 'onTapLink' in opts ? opts.onTapLink : null;
    let imageDirectory = opts && 'imageDirectory' in opts ? opts.imageDirectory : null;
    let extensionSet = opts && 'extensionSet' in opts ? opts.extensionSet : null;
    let imageBuilder = opts && 'imageBuilder' in opts ? opts.imageBuilder : null;
    let checkboxBuilder = opts && 'checkboxBuilder' in opts ? opts.checkboxBuilder : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[data$] = data;
    this[styleSheet$0] = styleSheet;
    this[syntaxHighlighter$] = syntaxHighlighter;
    this[onTapLink$] = onTapLink;
    this[imageDirectory$0] = imageDirectory;
    this[extensionSet$] = extensionSet;
    this[imageBuilder$0] = imageBuilder;
    this[checkboxBuilder$0] = checkboxBuilder;
    if (!(data != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_markdown/src/widget.dart", 61, 16, "data != null");
    widget.MarkdownWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = widget.MarkdownWidget.prototype;
  dart.addTypeTests(widget.MarkdownWidget);
  dart.setMethodSignature(widget.MarkdownWidget, () => ({
    __proto__: dart.getMethods(widget.MarkdownWidget.__proto__),
    createState: dart.fnType(widget._MarkdownWidgetState, [])
  }));
  dart.setLibraryUri(widget.MarkdownWidget, "package:flutter_markdown/src/widget.dart");
  dart.setFieldSignature(widget.MarkdownWidget, () => ({
    __proto__: dart.getFields(widget.MarkdownWidget.__proto__),
    data: dart.finalFieldType(core.String),
    styleSheet: dart.finalFieldType(style_sheet.MarkdownStyleSheet),
    syntaxHighlighter: dart.finalFieldType(widget.SyntaxHighlighter),
    onTapLink: dart.finalFieldType(dart.fnType(dart.void, [core.String])),
    imageDirectory: dart.finalFieldType(core.String),
    extensionSet: dart.finalFieldType(extension_set.ExtensionSet),
    imageBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [core.Uri])),
    checkboxBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [core.bool]))
  }));
  const _children = dart.privateName(widget, "_children");
  const _recognizers = dart.privateName(widget, "_recognizers");
  const _parseMarkdown = dart.privateName(widget, "_parseMarkdown");
  const _disposeRecognizers = dart.privateName(widget, "_disposeRecognizers");
  widget._MarkdownWidgetState = class _MarkdownWidgetState extends framework.State$(widget.MarkdownWidget) {
    didChangeDependencies() {
      this[_parseMarkdown]();
      super.didChangeDependencies();
    }
    didUpdateWidget(oldWidget) {
      widget.MarkdownWidget._check(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (this.widget.data != oldWidget.data || !dart.equals(this.widget.styleSheet, oldWidget.styleSheet)) this[_parseMarkdown]();
    }
    dispose() {
      this[_disposeRecognizers]();
      super.dispose();
    }
    [_parseMarkdown]() {
      let t0, t0$;
      let styleSheet = (t0 = this.widget.styleSheet, t0 == null ? style_sheet.MarkdownStyleSheet.fromTheme(theme.Theme.of(this.context)) : t0);
      this[_disposeRecognizers]();
      let lines = this.widget.data[$split](core.RegExp.new("\\r?\\n"));
      let document = new document$.Document.new({extensionSet: (t0$ = this.widget.extensionSet, t0$ == null ? extension_set.ExtensionSet.gitHubFlavored : t0$), inlineSyntaxes: JSArrayOfInlineSyntax().of([new widget.TaskListSyntax.new()]), encodeHtml: false});
      let builder = new builder$.MarkdownBuilder.new({delegate: this, styleSheet: styleSheet, imageDirectory: this.widget.imageDirectory});
      this[_children] = builder.build(document.parseLines(lines));
    }
    [_disposeRecognizers]() {
      if (dart.test(this[_recognizers][$isEmpty])) return;
      let localRecognizers = ListOfGestureRecognizer().from(this[_recognizers]);
      this[_recognizers][$clear]();
      for (let recognizer of localRecognizers)
        recognizer.dispose();
    }
    createLink(href) {
      let t0;
      let recognizer = (t0 = new tap.TapGestureRecognizer.new(), t0.onTap = dart.fn(() => {
        if (this.widget.onTapLink != null) this.widget.onTapLink(href);
      }, VoidToNull()), t0);
      this[_recognizers][$add](recognizer);
      return recognizer;
    }
    formatText(styleSheet, code) {
      code = code[$replaceAll](core.RegExp.new("\\n$"), "");
      if (this.widget.syntaxHighlighter != null) {
        return this.widget.syntaxHighlighter.format(code);
      }
      return new text_span.TextSpan.new({style: styleSheet.code, text: code});
    }
    build(context) {
      return this.widget.build(context, this[_children]);
    }
  };
  (widget._MarkdownWidgetState.new = function() {
    this[_children] = null;
    this[_recognizers] = JSArrayOfGestureRecognizer().of([]);
    widget._MarkdownWidgetState.__proto__.new.call(this);
    ;
  }).prototype = widget._MarkdownWidgetState.prototype;
  dart.addTypeTests(widget._MarkdownWidgetState);
  widget._MarkdownWidgetState[dart.implements] = () => [builder$.MarkdownBuilderDelegate];
  dart.setMethodSignature(widget._MarkdownWidgetState, () => ({
    __proto__: dart.getMethods(widget._MarkdownWidgetState.__proto__),
    [_parseMarkdown]: dart.fnType(dart.void, []),
    [_disposeRecognizers]: dart.fnType(dart.void, []),
    createLink: dart.fnType(recognizer.GestureRecognizer, [core.String]),
    formatText: dart.fnType(text_span.TextSpan, [style_sheet.MarkdownStyleSheet, core.String]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(widget._MarkdownWidgetState, "package:flutter_markdown/src/widget.dart");
  dart.setFieldSignature(widget._MarkdownWidgetState, () => ({
    __proto__: dart.getFields(widget._MarkdownWidgetState.__proto__),
    [_children]: dart.fieldType(core.List$(framework.Widget)),
    [_recognizers]: dart.finalFieldType(core.List$(recognizer.GestureRecognizer))
  }));
  let C142;
  let C143;
  let C144;
  let C141;
  let C140;
  const shrinkWrap$ = dart.privateName(widget, "MarkdownBody.shrinkWrap");
  widget.MarkdownBody = class MarkdownBody extends widget.MarkdownWidget {
    get shrinkWrap() {
      return this[shrinkWrap$];
    }
    set shrinkWrap(value) {
      super.shrinkWrap = value;
    }
    build(context, children) {
      if (children[$length] === 1 && !dart.test(this.shrinkWrap)) return children[$single];
      return new basic.Column.new({mainAxisSize: dart.test(this.shrinkWrap) ? flex.MainAxisSize.min : flex.MainAxisSize.max, crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: children, $creationLocationd_0dea112b090073317d4: C140 || CT.C140});
    }
  };
  (widget.MarkdownBody.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let data = opts && 'data' in opts ? opts.data : null;
    let styleSheet = opts && 'styleSheet' in opts ? opts.styleSheet : null;
    let syntaxHighlighter = opts && 'syntaxHighlighter' in opts ? opts.syntaxHighlighter : null;
    let onTapLink = opts && 'onTapLink' in opts ? opts.onTapLink : null;
    let imageDirectory = opts && 'imageDirectory' in opts ? opts.imageDirectory : null;
    let extensionSet = opts && 'extensionSet' in opts ? opts.extensionSet : null;
    let imageBuilder = opts && 'imageBuilder' in opts ? opts.imageBuilder : null;
    let checkboxBuilder = opts && 'checkboxBuilder' in opts ? opts.checkboxBuilder : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[shrinkWrap$] = shrinkWrap;
    widget.MarkdownBody.__proto__.new.call(this, {key: key, data: data, styleSheet: styleSheet, syntaxHighlighter: syntaxHighlighter, onTapLink: onTapLink, imageDirectory: imageDirectory, extensionSet: extensionSet, imageBuilder: imageBuilder, checkboxBuilder: checkboxBuilder, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = widget.MarkdownBody.prototype;
  dart.addTypeTests(widget.MarkdownBody);
  dart.setMethodSignature(widget.MarkdownBody, () => ({
    __proto__: dart.getMethods(widget.MarkdownBody.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext, core.List$(framework.Widget)])
  }));
  dart.setLibraryUri(widget.MarkdownBody, "package:flutter_markdown/src/widget.dart");
  dart.setFieldSignature(widget.MarkdownBody, () => ({
    __proto__: dart.getFields(widget.MarkdownBody.__proto__),
    shrinkWrap: dart.finalFieldType(core.bool)
  }));
  let C145;
  let C148;
  let C149;
  let C150;
  let C151;
  let C147;
  let C146;
  const padding$ = dart.privateName(widget, "Markdown.padding");
  const physics$ = dart.privateName(widget, "Markdown.physics");
  const shrinkWrap$0 = dart.privateName(widget, "Markdown.shrinkWrap");
  widget.Markdown = class Markdown extends widget.MarkdownWidget {
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    get physics() {
      return this[physics$];
    }
    set physics(value) {
      super.physics = value;
    }
    get shrinkWrap() {
      return this[shrinkWrap$0];
    }
    set shrinkWrap(value) {
      super.shrinkWrap = value;
    }
    build(context, children) {
      return new scroll_view.ListView.new({padding: this.padding, physics: this.physics, shrinkWrap: this.shrinkWrap, children: children, $creationLocationd_0dea112b090073317d4: C146 || CT.C146});
    }
  };
  (widget.Markdown.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let data = opts && 'data' in opts ? opts.data : null;
    let styleSheet = opts && 'styleSheet' in opts ? opts.styleSheet : null;
    let syntaxHighlighter = opts && 'syntaxHighlighter' in opts ? opts.syntaxHighlighter : null;
    let onTapLink = opts && 'onTapLink' in opts ? opts.onTapLink : null;
    let imageDirectory = opts && 'imageDirectory' in opts ? opts.imageDirectory : null;
    let extensionSet = opts && 'extensionSet' in opts ? opts.extensionSet : null;
    let imageBuilder = opts && 'imageBuilder' in opts ? opts.imageBuilder : null;
    let checkboxBuilder = opts && 'checkboxBuilder' in opts ? opts.checkboxBuilder : null;
    let padding = opts && 'padding' in opts ? opts.padding : C145 || CT.C145;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[padding$] = padding;
    this[physics$] = physics;
    this[shrinkWrap$0] = shrinkWrap;
    widget.Markdown.__proto__.new.call(this, {key: key, data: data, styleSheet: styleSheet, syntaxHighlighter: syntaxHighlighter, onTapLink: onTapLink, imageDirectory: imageDirectory, extensionSet: extensionSet, imageBuilder: imageBuilder, checkboxBuilder: checkboxBuilder, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = widget.Markdown.prototype;
  dart.addTypeTests(widget.Markdown);
  dart.setMethodSignature(widget.Markdown, () => ({
    __proto__: dart.getMethods(widget.Markdown.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext, core.List$(framework.Widget)])
  }));
  dart.setLibraryUri(widget.Markdown, "package:flutter_markdown/src/widget.dart");
  dart.setFieldSignature(widget.Markdown, () => ({
    __proto__: dart.getFields(widget.Markdown.__proto__),
    padding: dart.finalFieldType(edge_insets.EdgeInsets),
    physics: dart.finalFieldType(scroll_physics.ScrollPhysics),
    shrinkWrap: dart.finalFieldType(core.bool)
  }));
  widget.TaskListSyntax = class TaskListSyntax extends inline_parser.InlineSyntax {
    onMatch(parser, match) {
      let el = new ast.Element.withTag("input");
      el.attributes[$_set]("type", "checkbox");
      el.attributes[$_set]("disabled", "true");
      el.attributes[$_set]("checked", dart.str(match._get(1)[$trim]()[$isNotEmpty]));
      parser.addNode(el);
      return true;
    }
  };
  (widget.TaskListSyntax.new = function() {
    widget.TaskListSyntax.__proto__.new.call(this, widget.TaskListSyntax._pattern);
    ;
  }).prototype = widget.TaskListSyntax.prototype;
  dart.addTypeTests(widget.TaskListSyntax);
  dart.setMethodSignature(widget.TaskListSyntax, () => ({
    __proto__: dart.getMethods(widget.TaskListSyntax.__proto__),
    onMatch: dart.fnType(core.bool, [inline_parser.InlineParser, core.Match])
  }));
  dart.setLibraryUri(widget.TaskListSyntax, "package:flutter_markdown/src/widget.dart");
  dart.defineLazy(widget.TaskListSyntax, {
    /*widget.TaskListSyntax._pattern*/get _pattern() {
      return "^ *\\[([ xX])\\] +";
    }
  });
  const _styles = dart.privateName(style_sheet, "_styles");
  const TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  const TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  const TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  const TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  const TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  const TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  const TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  const TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  const TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  const TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  const TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  const TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  const TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  const TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  const TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  const TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  const TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  const TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  const TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  const TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  const TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  const Color_value = dart.privateName(ui, "Color.value");
  let C155;
  let C156;
  let C157;
  let C158;
  let C159;
  let C160;
  let C161;
  let C162;
  let C163;
  let C164;
  let C154;
  const ColorSwatch__swatch = dart.privateName(colors, "ColorSwatch._swatch");
  let C153;
  const TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  const TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  let C152;
  const _name = dart.privateName(ui, "_name");
  let C166;
  let C165;
  const FontWeight_index = dart.privateName(ui, "FontWeight.index");
  let C168;
  let C167;
  const TextDecoration__mask = dart.privateName(ui, "TextDecoration._mask");
  let C170;
  let C169;
  let C172;
  let C171;
  let C173;
  let C174;
  const a$ = dart.privateName(style_sheet, "MarkdownStyleSheet.a");
  const p$ = dart.privateName(style_sheet, "MarkdownStyleSheet.p");
  const code$ = dart.privateName(style_sheet, "MarkdownStyleSheet.code");
  const h1$ = dart.privateName(style_sheet, "MarkdownStyleSheet.h1");
  const h2$ = dart.privateName(style_sheet, "MarkdownStyleSheet.h2");
  const h3$ = dart.privateName(style_sheet, "MarkdownStyleSheet.h3");
  const h4$ = dart.privateName(style_sheet, "MarkdownStyleSheet.h4");
  const h5$ = dart.privateName(style_sheet, "MarkdownStyleSheet.h5");
  const h6$ = dart.privateName(style_sheet, "MarkdownStyleSheet.h6");
  const em$ = dart.privateName(style_sheet, "MarkdownStyleSheet.em");
  const strong$ = dart.privateName(style_sheet, "MarkdownStyleSheet.strong");
  const del$ = dart.privateName(style_sheet, "MarkdownStyleSheet.del");
  const blockquote$ = dart.privateName(style_sheet, "MarkdownStyleSheet.blockquote");
  const img$ = dart.privateName(style_sheet, "MarkdownStyleSheet.img");
  const checkbox$ = dart.privateName(style_sheet, "MarkdownStyleSheet.checkbox");
  const blockSpacing$ = dart.privateName(style_sheet, "MarkdownStyleSheet.blockSpacing");
  const listIndent$ = dart.privateName(style_sheet, "MarkdownStyleSheet.listIndent");
  const listBullet$ = dart.privateName(style_sheet, "MarkdownStyleSheet.listBullet");
  const tableHead$ = dart.privateName(style_sheet, "MarkdownStyleSheet.tableHead");
  const tableBody$ = dart.privateName(style_sheet, "MarkdownStyleSheet.tableBody");
  const tableHeadAlign$ = dart.privateName(style_sheet, "MarkdownStyleSheet.tableHeadAlign");
  const tableBorder$ = dart.privateName(style_sheet, "MarkdownStyleSheet.tableBorder");
  const tableCellsPadding$ = dart.privateName(style_sheet, "MarkdownStyleSheet.tableCellsPadding");
  const tableCellsDecoration$ = dart.privateName(style_sheet, "MarkdownStyleSheet.tableCellsDecoration");
  const blockquotePadding$ = dart.privateName(style_sheet, "MarkdownStyleSheet.blockquotePadding");
  const blockquoteDecoration$ = dart.privateName(style_sheet, "MarkdownStyleSheet.blockquoteDecoration");
  const codeblockPadding$ = dart.privateName(style_sheet, "MarkdownStyleSheet.codeblockPadding");
  const codeblockDecoration$ = dart.privateName(style_sheet, "MarkdownStyleSheet.codeblockDecoration");
  const horizontalRuleDecoration$ = dart.privateName(style_sheet, "MarkdownStyleSheet.horizontalRuleDecoration");
  const textScaleFactor$ = dart.privateName(style_sheet, "MarkdownStyleSheet.textScaleFactor");
  style_sheet.MarkdownStyleSheet = class MarkdownStyleSheet extends core.Object {
    get a() {
      return this[a$];
    }
    set a(value) {
      super.a = value;
    }
    get p() {
      return this[p$];
    }
    set p(value) {
      super.p = value;
    }
    get code() {
      return this[code$];
    }
    set code(value) {
      super.code = value;
    }
    get h1() {
      return this[h1$];
    }
    set h1(value) {
      super.h1 = value;
    }
    get h2() {
      return this[h2$];
    }
    set h2(value) {
      super.h2 = value;
    }
    get h3() {
      return this[h3$];
    }
    set h3(value) {
      super.h3 = value;
    }
    get h4() {
      return this[h4$];
    }
    set h4(value) {
      super.h4 = value;
    }
    get h5() {
      return this[h5$];
    }
    set h5(value) {
      super.h5 = value;
    }
    get h6() {
      return this[h6$];
    }
    set h6(value) {
      super.h6 = value;
    }
    get em() {
      return this[em$];
    }
    set em(value) {
      super.em = value;
    }
    get strong() {
      return this[strong$];
    }
    set strong(value) {
      super.strong = value;
    }
    get del() {
      return this[del$];
    }
    set del(value) {
      super.del = value;
    }
    get blockquote() {
      return this[blockquote$];
    }
    set blockquote(value) {
      super.blockquote = value;
    }
    get img() {
      return this[img$];
    }
    set img(value) {
      super.img = value;
    }
    get checkbox() {
      return this[checkbox$];
    }
    set checkbox(value) {
      super.checkbox = value;
    }
    get blockSpacing() {
      return this[blockSpacing$];
    }
    set blockSpacing(value) {
      super.blockSpacing = value;
    }
    get listIndent() {
      return this[listIndent$];
    }
    set listIndent(value) {
      super.listIndent = value;
    }
    get listBullet() {
      return this[listBullet$];
    }
    set listBullet(value) {
      super.listBullet = value;
    }
    get tableHead() {
      return this[tableHead$];
    }
    set tableHead(value) {
      super.tableHead = value;
    }
    get tableBody() {
      return this[tableBody$];
    }
    set tableBody(value) {
      super.tableBody = value;
    }
    get tableHeadAlign() {
      return this[tableHeadAlign$];
    }
    set tableHeadAlign(value) {
      super.tableHeadAlign = value;
    }
    get tableBorder() {
      return this[tableBorder$];
    }
    set tableBorder(value) {
      super.tableBorder = value;
    }
    get tableCellsPadding() {
      return this[tableCellsPadding$];
    }
    set tableCellsPadding(value) {
      super.tableCellsPadding = value;
    }
    get tableCellsDecoration() {
      return this[tableCellsDecoration$];
    }
    set tableCellsDecoration(value) {
      super.tableCellsDecoration = value;
    }
    get blockquotePadding() {
      return this[blockquotePadding$];
    }
    set blockquotePadding(value) {
      super.blockquotePadding = value;
    }
    get blockquoteDecoration() {
      return this[blockquoteDecoration$];
    }
    set blockquoteDecoration(value) {
      super.blockquoteDecoration = value;
    }
    get codeblockPadding() {
      return this[codeblockPadding$];
    }
    set codeblockPadding(value) {
      super.codeblockPadding = value;
    }
    get codeblockDecoration() {
      return this[codeblockDecoration$];
    }
    set codeblockDecoration(value) {
      super.codeblockDecoration = value;
    }
    get horizontalRuleDecoration() {
      return this[horizontalRuleDecoration$];
    }
    set horizontalRuleDecoration(value) {
      super.horizontalRuleDecoration = value;
    }
    get textScaleFactor() {
      return this[textScaleFactor$];
    }
    set textScaleFactor(value) {
      super.textScaleFactor = value;
    }
    static fromTheme(theme) {
      let t0, t0$, t0$0;
      if (!((t0$0 = (t0$ = (t0 = theme, t0 == null ? null : t0.textTheme), t0$ == null ? null : t0$.body1), t0$0 == null ? null : t0$0.fontSize) != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_markdown/src/style_sheet.dart", 66, 12, "theme?.textTheme?.body1?.fontSize != null");
      return new style_sheet.MarkdownStyleSheet.new({a: C152 || CT.C152, p: theme.textTheme.body1, code: theme.textTheme.body1.copyWith({backgroundColor: colors$.Colors.grey.shade200, fontFamily: "monospace", fontSize: dart.notNull(theme.textTheme.body1.fontSize) * 0.85}), h1: theme.textTheme.headline, h2: theme.textTheme.title, h3: theme.textTheme.subhead, h4: theme.textTheme.body2, h5: theme.textTheme.body2, h6: theme.textTheme.body2, em: C165 || CT.C165, strong: C167 || CT.C167, del: C169 || CT.C169, blockquote: theme.textTheme.body1, img: theme.textTheme.body1, checkbox: theme.textTheme.body1.copyWith({color: theme.primaryColor}), blockSpacing: 8.0, listIndent: 24.0, listBullet: theme.textTheme.body1, tableHead: C171 || CT.C171, tableBody: theme.textTheme.body1, tableHeadAlign: ui.TextAlign.center, tableBorder: table_border.TableBorder.all({color: colors$.Colors.grey.shade300, width: 0.0}), tableCellsPadding: C173 || CT.C173, tableCellsDecoration: new box_decoration.BoxDecoration.new({color: colors$.Colors.grey.shade50}), blockquotePadding: C174 || CT.C174, blockquoteDecoration: new box_decoration.BoxDecoration.new({color: colors$.Colors.blue.shade100, borderRadius: new border_radius.BorderRadius.circular(2.0)}), codeblockPadding: C174 || CT.C174, codeblockDecoration: new box_decoration.BoxDecoration.new({color: colors$.Colors.grey.shade200, borderRadius: new border_radius.BorderRadius.circular(2.0)}), horizontalRuleDecoration: new box_decoration.BoxDecoration.new({border: new box_border.Border.new({top: new borders.BorderSide.new({width: 5.0, color: colors$.Colors.grey.shade300})})})});
    }
    static largeFromTheme(theme) {
      return new style_sheet.MarkdownStyleSheet.new({a: C152 || CT.C152, p: theme.textTheme.body1, code: theme.textTheme.body1.copyWith({backgroundColor: colors$.Colors.grey.shade200, fontFamily: "monospace", fontSize: dart.notNull(theme.textTheme.body1.fontSize) * 0.85}), h1: theme.textTheme.display3, h2: theme.textTheme.display2, h3: theme.textTheme.display1, h4: theme.textTheme.headline, h5: theme.textTheme.title, h6: theme.textTheme.subhead, em: C165 || CT.C165, strong: C167 || CT.C167, del: C169 || CT.C169, blockquote: theme.textTheme.body1, img: theme.textTheme.body1, checkbox: theme.textTheme.body1.copyWith({color: theme.primaryColor}), blockSpacing: 8.0, listIndent: 24.0, listBullet: theme.textTheme.body1, tableHead: C171 || CT.C171, tableBody: theme.textTheme.body1, tableHeadAlign: ui.TextAlign.center, tableBorder: table_border.TableBorder.all({color: colors$.Colors.grey.shade300}), tableCellsPadding: C173 || CT.C173, tableCellsDecoration: new box_decoration.BoxDecoration.new({color: colors$.Colors.grey.shade50}), blockquotePadding: C174 || CT.C174, blockquoteDecoration: new box_decoration.BoxDecoration.new({color: colors$.Colors.blue.shade100, borderRadius: new border_radius.BorderRadius.circular(2.0)}), codeblockPadding: C174 || CT.C174, codeblockDecoration: new box_decoration.BoxDecoration.new({color: colors$.Colors.grey.shade200, borderRadius: new border_radius.BorderRadius.circular(2.0)}), horizontalRuleDecoration: new box_decoration.BoxDecoration.new({border: new box_border.Border.new({top: new borders.BorderSide.new({width: 5.0, color: colors$.Colors.grey.shade300})})})});
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9, t0$10, t0$11, t0$12, t0$13, t0$14, t0$15, t0$16, t0$17, t0$18, t0$19, t0$20, t0$21, t0$22, t0$23, t0$24, t0$25, t0$26, t0$27;
      let a = opts && 'a' in opts ? opts.a : null;
      let p = opts && 'p' in opts ? opts.p : null;
      let code = opts && 'code' in opts ? opts.code : null;
      let h1 = opts && 'h1' in opts ? opts.h1 : null;
      let h2 = opts && 'h2' in opts ? opts.h2 : null;
      let h3 = opts && 'h3' in opts ? opts.h3 : null;
      let h4 = opts && 'h4' in opts ? opts.h4 : null;
      let h5 = opts && 'h5' in opts ? opts.h5 : null;
      let h6 = opts && 'h6' in opts ? opts.h6 : null;
      let em = opts && 'em' in opts ? opts.em : null;
      let strong = opts && 'strong' in opts ? opts.strong : null;
      let del = opts && 'del' in opts ? opts.del : null;
      let blockquote = opts && 'blockquote' in opts ? opts.blockquote : null;
      let img = opts && 'img' in opts ? opts.img : null;
      let checkbox = opts && 'checkbox' in opts ? opts.checkbox : null;
      let blockSpacing = opts && 'blockSpacing' in opts ? opts.blockSpacing : null;
      let listIndent = opts && 'listIndent' in opts ? opts.listIndent : null;
      let listBullet = opts && 'listBullet' in opts ? opts.listBullet : null;
      let tableHead = opts && 'tableHead' in opts ? opts.tableHead : null;
      let tableBody = opts && 'tableBody' in opts ? opts.tableBody : null;
      let tableHeadAlign = opts && 'tableHeadAlign' in opts ? opts.tableHeadAlign : null;
      let tableBorder = opts && 'tableBorder' in opts ? opts.tableBorder : null;
      let tableCellsPadding = opts && 'tableCellsPadding' in opts ? opts.tableCellsPadding : null;
      let tableCellsDecoration = opts && 'tableCellsDecoration' in opts ? opts.tableCellsDecoration : null;
      let blockquotePadding = opts && 'blockquotePadding' in opts ? opts.blockquotePadding : null;
      let blockquoteDecoration = opts && 'blockquoteDecoration' in opts ? opts.blockquoteDecoration : null;
      let codeblockPadding = opts && 'codeblockPadding' in opts ? opts.codeblockPadding : null;
      let codeblockDecoration = opts && 'codeblockDecoration' in opts ? opts.codeblockDecoration : null;
      let horizontalRuleDecoration = opts && 'horizontalRuleDecoration' in opts ? opts.horizontalRuleDecoration : null;
      let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : null;
      return new style_sheet.MarkdownStyleSheet.new({a: (t0 = a, t0 == null ? this.a : t0), p: (t0$ = p, t0$ == null ? this.p : t0$), code: (t0$0 = code, t0$0 == null ? this.code : t0$0), h1: (t0$1 = h1, t0$1 == null ? this.h1 : t0$1), h2: (t0$2 = h2, t0$2 == null ? this.h2 : t0$2), h3: (t0$3 = h3, t0$3 == null ? this.h3 : t0$3), h4: (t0$4 = h4, t0$4 == null ? this.h4 : t0$4), h5: (t0$5 = h5, t0$5 == null ? this.h5 : t0$5), h6: (t0$6 = h6, t0$6 == null ? this.h6 : t0$6), em: (t0$7 = em, t0$7 == null ? this.em : t0$7), strong: (t0$8 = strong, t0$8 == null ? this.strong : t0$8), del: (t0$9 = del, t0$9 == null ? this.del : t0$9), blockquote: (t0$10 = blockquote, t0$10 == null ? this.blockquote : t0$10), img: (t0$11 = img, t0$11 == null ? this.img : t0$11), checkbox: (t0$12 = checkbox, t0$12 == null ? this.checkbox : t0$12), blockSpacing: (t0$13 = blockSpacing, t0$13 == null ? this.blockSpacing : t0$13), listIndent: (t0$14 = listIndent, t0$14 == null ? this.listIndent : t0$14), listBullet: (t0$15 = listBullet, t0$15 == null ? this.listBullet : t0$15), tableHead: (t0$16 = tableHead, t0$16 == null ? this.tableHead : t0$16), tableBody: (t0$17 = tableBody, t0$17 == null ? this.tableBody : t0$17), tableHeadAlign: (t0$18 = tableHeadAlign, t0$18 == null ? this.tableHeadAlign : t0$18), tableBorder: (t0$19 = tableBorder, t0$19 == null ? this.tableBorder : t0$19), tableCellsPadding: (t0$20 = tableCellsPadding, t0$20 == null ? this.tableCellsPadding : t0$20), tableCellsDecoration: (t0$21 = tableCellsDecoration, t0$21 == null ? this.tableCellsDecoration : t0$21), blockquotePadding: (t0$22 = blockquotePadding, t0$22 == null ? this.blockquotePadding : t0$22), blockquoteDecoration: (t0$23 = blockquoteDecoration, t0$23 == null ? this.blockquoteDecoration : t0$23), codeblockPadding: (t0$24 = codeblockPadding, t0$24 == null ? this.codeblockPadding : t0$24), codeblockDecoration: (t0$25 = codeblockDecoration, t0$25 == null ? this.codeblockDecoration : t0$25), horizontalRuleDecoration: (t0$26 = horizontalRuleDecoration, t0$26 == null ? this.horizontalRuleDecoration : t0$26), textScaleFactor: (t0$27 = textScaleFactor, t0$27 == null ? this.textScaleFactor : t0$27)});
    }
    get styles() {
      return this[_styles];
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), dart.wrapType(style_sheet.MarkdownStyleSheet))) return false;
      let typedOther = style_sheet.MarkdownStyleSheet._check(other);
      return dart.equals(typedOther.a, this.a) && dart.equals(typedOther.p, this.p) && dart.equals(typedOther.code, this.code) && dart.equals(typedOther.h1, this.h1) && dart.equals(typedOther.h2, this.h2) && dart.equals(typedOther.h3, this.h3) && dart.equals(typedOther.h4, this.h4) && dart.equals(typedOther.h5, this.h5) && dart.equals(typedOther.h6, this.h6) && dart.equals(typedOther.em, this.em) && dart.equals(typedOther.strong, this.strong) && dart.equals(typedOther.del, this.del) && dart.equals(typedOther.blockquote, this.blockquote) && dart.equals(typedOther.img, this.img) && dart.equals(typedOther.checkbox, this.checkbox) && typedOther.blockSpacing == this.blockSpacing && typedOther.listIndent == this.listIndent && dart.equals(typedOther.listBullet, this.listBullet) && dart.equals(typedOther.tableHead, this.tableHead) && dart.equals(typedOther.tableBody, this.tableBody) && dart.equals(typedOther.tableHeadAlign, this.tableHeadAlign) && dart.equals(typedOther.tableBorder, this.tableBorder) && dart.equals(typedOther.tableCellsPadding, this.tableCellsPadding) && dart.equals(typedOther.tableCellsDecoration, this.tableCellsDecoration) && dart.equals(typedOther.blockquotePadding, this.blockquotePadding) && dart.equals(typedOther.blockquoteDecoration, this.blockquoteDecoration) && dart.equals(typedOther.codeblockPadding, this.codeblockPadding) && dart.equals(typedOther.codeblockDecoration, this.codeblockDecoration) && dart.equals(typedOther.horizontalRuleDecoration, this.horizontalRuleDecoration) && typedOther.textScaleFactor == this.textScaleFactor;
    }
    get hashCode() {
      return ui.hashList(JSArrayOfObject().of([this.a, this.p, this.code, this.h1, this.h2, this.h3, this.h4, this.h5, this.h6, this.em, this.strong, this.del, this.blockquote, this.img, this.checkbox, this.blockSpacing, this.listIndent, this.listBullet, this.tableHead, this.tableBody, this.tableHeadAlign, this.tableBorder, this.tableCellsPadding, this.tableCellsDecoration, this.blockquotePadding, this.blockquoteDecoration, this.codeblockPadding, this.codeblockDecoration, this.horizontalRuleDecoration, this.textScaleFactor]));
    }
  };
  (style_sheet.MarkdownStyleSheet.new = function(opts) {
    let a = opts && 'a' in opts ? opts.a : null;
    let p = opts && 'p' in opts ? opts.p : null;
    let code = opts && 'code' in opts ? opts.code : null;
    let h1 = opts && 'h1' in opts ? opts.h1 : null;
    let h2 = opts && 'h2' in opts ? opts.h2 : null;
    let h3 = opts && 'h3' in opts ? opts.h3 : null;
    let h4 = opts && 'h4' in opts ? opts.h4 : null;
    let h5 = opts && 'h5' in opts ? opts.h5 : null;
    let h6 = opts && 'h6' in opts ? opts.h6 : null;
    let em = opts && 'em' in opts ? opts.em : null;
    let strong = opts && 'strong' in opts ? opts.strong : null;
    let del = opts && 'del' in opts ? opts.del : null;
    let blockquote = opts && 'blockquote' in opts ? opts.blockquote : null;
    let img = opts && 'img' in opts ? opts.img : null;
    let checkbox = opts && 'checkbox' in opts ? opts.checkbox : null;
    let blockSpacing = opts && 'blockSpacing' in opts ? opts.blockSpacing : null;
    let listIndent = opts && 'listIndent' in opts ? opts.listIndent : null;
    let listBullet = opts && 'listBullet' in opts ? opts.listBullet : null;
    let tableHead = opts && 'tableHead' in opts ? opts.tableHead : null;
    let tableBody = opts && 'tableBody' in opts ? opts.tableBody : null;
    let tableHeadAlign = opts && 'tableHeadAlign' in opts ? opts.tableHeadAlign : null;
    let tableBorder = opts && 'tableBorder' in opts ? opts.tableBorder : null;
    let tableCellsPadding = opts && 'tableCellsPadding' in opts ? opts.tableCellsPadding : null;
    let tableCellsDecoration = opts && 'tableCellsDecoration' in opts ? opts.tableCellsDecoration : null;
    let blockquotePadding = opts && 'blockquotePadding' in opts ? opts.blockquotePadding : null;
    let blockquoteDecoration = opts && 'blockquoteDecoration' in opts ? opts.blockquoteDecoration : null;
    let codeblockPadding = opts && 'codeblockPadding' in opts ? opts.codeblockPadding : null;
    let codeblockDecoration = opts && 'codeblockDecoration' in opts ? opts.codeblockDecoration : null;
    let horizontalRuleDecoration = opts && 'horizontalRuleDecoration' in opts ? opts.horizontalRuleDecoration : null;
    let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1;
    this[a$] = a;
    this[p$] = p;
    this[code$] = code;
    this[h1$] = h1;
    this[h2$] = h2;
    this[h3$] = h3;
    this[h4$] = h4;
    this[h5$] = h5;
    this[h6$] = h6;
    this[em$] = em;
    this[strong$] = strong;
    this[del$] = del;
    this[blockquote$] = blockquote;
    this[img$] = img;
    this[checkbox$] = checkbox;
    this[blockSpacing$] = blockSpacing;
    this[listIndent$] = listIndent;
    this[listBullet$] = listBullet;
    this[tableHead$] = tableHead;
    this[tableBody$] = tableBody;
    this[tableHeadAlign$] = tableHeadAlign;
    this[tableBorder$] = tableBorder;
    this[tableCellsPadding$] = tableCellsPadding;
    this[tableCellsDecoration$] = tableCellsDecoration;
    this[blockquotePadding$] = blockquotePadding;
    this[blockquoteDecoration$] = blockquoteDecoration;
    this[codeblockPadding$] = codeblockPadding;
    this[codeblockDecoration$] = codeblockDecoration;
    this[horizontalRuleDecoration$] = horizontalRuleDecoration;
    this[textScaleFactor$] = textScaleFactor;
    this[_styles] = new (IdentityMapOfString$TextStyle()).from(["a", a, "p", p, "li", p, "code", code, "pre", p, "h1", h1, "h2", h2, "h3", h3, "h4", h4, "h5", h5, "h6", h6, "em", em, "strong", strong, "del", del, "blockquote", blockquote, "img", img, "table", p, "th", tableHead, "tr", tableBody, "td", tableBody]);
    ;
  }).prototype = style_sheet.MarkdownStyleSheet.prototype;
  dart.addTypeTests(style_sheet.MarkdownStyleSheet);
  dart.setMethodSignature(style_sheet.MarkdownStyleSheet, () => ({
    __proto__: dart.getMethods(style_sheet.MarkdownStyleSheet.__proto__),
    copyWith: dart.fnType(style_sheet.MarkdownStyleSheet, [], {a: text_style.TextStyle, blockSpacing: core.double, blockquote: text_style.TextStyle, blockquoteDecoration: decoration.Decoration, blockquotePadding: edge_insets.EdgeInsets, checkbox: text_style.TextStyle, code: text_style.TextStyle, codeblockDecoration: decoration.Decoration, codeblockPadding: edge_insets.EdgeInsets, del: text_style.TextStyle, em: text_style.TextStyle, h1: text_style.TextStyle, h2: text_style.TextStyle, h3: text_style.TextStyle, h4: text_style.TextStyle, h5: text_style.TextStyle, h6: text_style.TextStyle, horizontalRuleDecoration: decoration.Decoration, img: text_style.TextStyle, listBullet: text_style.TextStyle, listIndent: core.double, p: text_style.TextStyle, strong: text_style.TextStyle, tableBody: text_style.TextStyle, tableBorder: table_border.TableBorder, tableCellsDecoration: decoration.Decoration, tableCellsPadding: edge_insets.EdgeInsets, tableHead: text_style.TextStyle, tableHeadAlign: ui.TextAlign, textScaleFactor: core.double}, {})
  }));
  dart.setGetterSignature(style_sheet.MarkdownStyleSheet, () => ({
    __proto__: dart.getGetters(style_sheet.MarkdownStyleSheet.__proto__),
    styles: core.Map$(core.String, text_style.TextStyle)
  }));
  dart.setLibraryUri(style_sheet.MarkdownStyleSheet, "package:flutter_markdown/src/style_sheet.dart");
  dart.setFieldSignature(style_sheet.MarkdownStyleSheet, () => ({
    __proto__: dart.getFields(style_sheet.MarkdownStyleSheet.__proto__),
    a: dart.finalFieldType(text_style.TextStyle),
    p: dart.finalFieldType(text_style.TextStyle),
    code: dart.finalFieldType(text_style.TextStyle),
    h1: dart.finalFieldType(text_style.TextStyle),
    h2: dart.finalFieldType(text_style.TextStyle),
    h3: dart.finalFieldType(text_style.TextStyle),
    h4: dart.finalFieldType(text_style.TextStyle),
    h5: dart.finalFieldType(text_style.TextStyle),
    h6: dart.finalFieldType(text_style.TextStyle),
    em: dart.finalFieldType(text_style.TextStyle),
    strong: dart.finalFieldType(text_style.TextStyle),
    del: dart.finalFieldType(text_style.TextStyle),
    blockquote: dart.finalFieldType(text_style.TextStyle),
    img: dart.finalFieldType(text_style.TextStyle),
    checkbox: dart.finalFieldType(text_style.TextStyle),
    blockSpacing: dart.finalFieldType(core.double),
    listIndent: dart.finalFieldType(core.double),
    listBullet: dart.finalFieldType(text_style.TextStyle),
    tableHead: dart.finalFieldType(text_style.TextStyle),
    tableBody: dart.finalFieldType(text_style.TextStyle),
    tableHeadAlign: dart.finalFieldType(ui.TextAlign),
    tableBorder: dart.finalFieldType(table_border.TableBorder),
    tableCellsPadding: dart.finalFieldType(edge_insets.EdgeInsets),
    tableCellsDecoration: dart.finalFieldType(decoration.Decoration),
    blockquotePadding: dart.finalFieldType(edge_insets.EdgeInsets),
    blockquoteDecoration: dart.finalFieldType(decoration.Decoration),
    codeblockPadding: dart.finalFieldType(edge_insets.EdgeInsets),
    codeblockDecoration: dart.finalFieldType(decoration.Decoration),
    horizontalRuleDecoration: dart.finalFieldType(decoration.Decoration),
    textScaleFactor: dart.finalFieldType(core.double),
    [_styles]: dart.fieldType(core.Map$(core.String, text_style.TextStyle))
  }));
  dart.defineExtensionMethods(style_sheet.MarkdownStyleSheet, ['_equals']);
  dart.defineExtensionAccessors(style_sheet.MarkdownStyleSheet, ['hashCode']);
  dart.trackLibraries("packages/flutter_markdown/flutter_markdown", {
    "package:flutter_markdown/src/builder.dart": builder$,
    "package:flutter_markdown/src/widget.dart": widget,
    "package:flutter_markdown/src/style_sheet.dart": style_sheet,
    "package:flutter_markdown/flutter_markdown.dart": flutter_markdown
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/builder.dart","src/widget.dart","src/style_sheet.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"flutter_markdown.ddc.js"}');
  // Exports:
  return {
    src__builder: builder$,
    src__widget: widget,
    src__style_sheet: style_sheet,
    flutter_markdown: flutter_markdown
  };
});

//# sourceMappingURL=flutter_markdown.ddc.js.map
