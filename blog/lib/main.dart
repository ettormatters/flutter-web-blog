import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  
    @override
    Widget build(BuildContext context) {
        return MaterialApp(
            title: 'Blog',
            theme: ThemeData(
                primarySwatch: Colors.blue,
            ),
            home: MyHomePage(title: 'Myeong.'),
        );
    }
}

class MyHomePage extends StatefulWidget {
    MyHomePage({Key key, this.title}) : super(key: key);

    final String title;

    @override
    _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
    int _counter = 0;

    void _incrementCounter() {
        setState(() {
        _counter++;
        });
    }

    @override
    Widget build(BuildContext context) {
        return Scaffold(
            backgroundColor: Colors.white,
            drawerScrimColor: Color(0x00000000),
            appBar: AppBar(
                backgroundColor: Colors.white,
                elevation: 0.0,
                textTheme: TextTheme(
                    title: TextStyle(fontSize: 20.0, color: Colors.black),
                ),
                title: Text(widget.title),
                leading: Builder(
                    builder: (BuildContext context) {
                        return IconButton(
                            color: Colors.black,
                            icon: const Icon(Icons.menu),
                            onPressed: () { Scaffold.of(context).openDrawer(); },
                            tooltip: MaterialLocalizations.of(context).openAppDrawerTooltip,
                        );
                    },
                ),
            ),
            drawer: SizedBox(
                width: 100,
                child: Drawer(
                    elevation: 0.0,
                    child: ListView(
                        // padding: const EdgeInsets.all(12),
                        children: <Widget>[
                            DrawerHeader(
                                child: new Text("DRAWER HEADER.."),
                                decoration: new BoxDecoration(
                                    color: Colors.black
                                ),
                            ),
                            ListTile(
                                leading: Icon(Icons.home),
                                title: Text('Home'),
                            ),
                            ListTile(
                                leading: Icon(Icons.home),
                                title: Text('Archive'),
                            ),
                            ListTile(
                                leading: Icon(Icons.home),
                                title: Text('About'),
                            ),
                        ],
                    )
                ),
            ),
            body: ListView(
                children: ListTile.divideTiles(
                    context: context,
                    tiles: [
                        ListTile(
                            leading: FlutterLogo(),
                            title: Text('Title'),
                            subtitle: Text('A strong animal'),
                            contentPadding: EdgeInsets.symmetric(horizontal: 19.0),
                            onTap: () {
                                // do something
                            },
                        ),
                        ListTile(
                            leading: FlutterLogo(),
                            title: Text('Title'),
                            subtitle: Text('A strong animal'),
                            contentPadding: EdgeInsets.symmetric(horizontal: 19.0),
                            onTap: () {
                                // do something
                            },
                        ),
                        ListTile(
                            leading: FlutterLogo(),
                            title: Text('Title'),
                            subtitle: Text('A strong animal'),
                            contentPadding: EdgeInsets.symmetric(horizontal: 19.0),
                            onTap: () {
                                // do something
                            },
                        ),
                        ListTile(
                            leading: FlutterLogo(),
                            title: Text('Title'),
                            subtitle: Text('A strong animal'),
                            contentPadding: EdgeInsets.symmetric(horizontal: 19.0),
                            onTap: () {
                                // do something
                            },
                        ),
                        ListTile(
                            leading: FlutterLogo(),
                            title: Text('Title'),
                            subtitle: Text('A strong animal'),
                            contentPadding: EdgeInsets.symmetric(horizontal: 19.0),
                            onTap: () {
                                // do something
                            },
                        ),
                    ]
                ).toList(),
            )
        );
    }
}
