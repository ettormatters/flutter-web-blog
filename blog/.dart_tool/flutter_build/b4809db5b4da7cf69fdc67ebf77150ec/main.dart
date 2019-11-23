import 'dart:ui' as ui;

import "file:///C:/oeritas.github.io/blog/lib/main.dart" as entrypoint;

Future<void> main() async {
  if (true) {
    await ui.webOnlyInitializePlatform();
  }
  entrypoint.main();
}
