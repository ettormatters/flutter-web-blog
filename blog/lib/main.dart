import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  
    @override
    Widget build(BuildContext context) {
        return MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(
            primarySwatch: Colors.blue,
        ),
        home: MyHomePage(title: 'Flutter Demo Home Page'),
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
            appBar: AppBar(
                title: Text(widget.title),
                leading: Builder(
                    builder: (BuildContext context) {
                        return IconButton(
                            icon: const Icon(Icons.menu),
                            onPressed: () { Scaffold.of(context).openDrawer(); },
                            tooltip: MaterialLocalizations.of(context).openAppDrawerTooltip,
                        );
                    },
                ),
            ),
            drawer: Drawer(
                child: ListView(
                    children: const <Widget>[
                        Card(
                            child: ListTile(
                                leading: FlutterLogo(),
                                title: Text('One-line with leading widget'),
                            ),
                        ),
                        Card(
                            child: ListTile(
                                leading: FlutterLogo(),
                                title: Text('One-line with leading widget'),
                            ),
                        ),
                        Card(
                            child: ListTile(
                                leading: FlutterLogo(),
                                title: Text('One-line with leading widget'),
                            ),
                        ),
                        Card(
                            child: ListTile(
                                leading: FlutterLogo(),
                                title: Text('One-line with leading widget'),
                            ),
                        ),
                        Card(
                            child: ListTile(
                                leading: FlutterLogo(),
                                title: Text('One-line with leading widget'),
                            ),
                        ),
                    ],
                )
            ),
            body: Center(
                child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                    Text(
                    'You have pushed the button this many times:',
                    ),
                    Text(
                    '$_counter',
                    style: Theme.of(context).textTheme.display1,
                    ),
                ],
                ),
            ),
            floatingActionButton: FloatingActionButton(
                onPressed: _incrementCounter,
                tooltip: 'Increment',
                child: Icon(Icons.add),
            ), // This trailing comma makes auto-formatting nicer for build methods.
        );
    }
}
