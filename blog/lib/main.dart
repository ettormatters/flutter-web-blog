import 'package:flutter/material.dart';
import 'package:flutter_markdown/flutter_markdown.dart';
import 'package:markdown/markdown.dart' hide Text;
import 'dart:async';
import 'dart:io';

void main() => runApp(MyApp());


class MyApp extends StatelessWidget {
  
    @override
    Widget build(BuildContext context) {
        return MaterialApp(
            title: 'Blog',
            theme: ThemeData(
                primarySwatch: Colors.blue,
				fontFamily: 'SourceSansPro',
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

    @override
    Widget build(BuildContext context) {
        return Scaffold(
            backgroundColor: Colors.white,
            drawerScrimColor: Color(0x00000000),
            appBar: AppBar(
                backgroundColor: Colors.white,
                elevation: 0.0,
                textTheme: TextTheme(
                    title: TextStyle(fontSize: 20.0, color: Colors.black,),
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
                width: 170,
                child: Drawer(
                    elevation: 0.1,
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
            body: Row (
				children: <Widget>[
					Expanded(
						child: Container(
							decoration: const BoxDecoration(color: Colors.white,)
						),
						flex: 1,
					),
					Expanded(
						child: ListView(
							children: ListTile.divideTiles(
								context: context,
								tiles: [
									MainListTile("flutter_markdown","2019-11-29"),
									MainListTile("flutter_markdown","2019-11-29"),
									MainListTile("flutter_markdown","2019-11-29"),
									MainListTile("flutter_markdown","2019-11-29"),
									MainListTile("flutter_markdown","2019-11-29"),
									MainListTile("flutter_markdown","2019-11-29"),
									MainListTile("flutter_markdown","2019-11-29"),
									MainListTile("flutter_markdown","2019-11-29"),
									MainListTile("flutter_markdown","2019-11-29"),
									MainListTile("flutter_markdown","2019-11-29"),
									MainListTile("flutter_markdown","2019-11-29"),
									MainListTile("flutter_markdown","2019-11-29"),
								]
							).toList(),
						),
						flex: 3,
					),
					Expanded(
						child: Container(
							decoration: const BoxDecoration(color: Colors.white),
						),
						flex: 1,
					),
				]
			),
        );
    }
}

class MainListTile extends StatelessWidget{

	final String list_title;
  	final String list_date;

	MainListTile(this.list_title, this.list_date);

	@override
    Widget build(BuildContext context) {
        return ListTile(
			title: Text(list_title),
			subtitle: Text(list_date),
			contentPadding: EdgeInsets.symmetric(horizontal: 19.0),
			onTap: () {
				Navigator.push(
					context,
					MaterialPageRoute(builder: (context) => ListContent(list_title)),
				);
			},
		);
    }
}

class ListContent extends StatelessWidget{
	final String list_title;
	String markdownSource;

	ListContent(this.list_title);
	
	@override
    Widget build(BuildContext context) {
        return Scaffold(
            backgroundColor: Colors.white,
            drawerScrimColor: Color(0x00000000),
            appBar: AppBar(
                backgroundColor: Colors.white,
                elevation: 0.0,
                textTheme: TextTheme(
                    title: TextStyle(fontSize: 20.0, color: Colors.black,),
                ),
                title: Text(list_title),
            ),
            body: Row (
				children: <Widget>[
					Expanded(
						child: Container(
							decoration: const BoxDecoration(color: Colors.white),
						),
						flex: 1,
					),
					Expanded(
						child: Markdown(data: '#markdownSource'),
						flex: 5,
					),
					Expanded(
						child: Container(
							decoration: const BoxDecoration(color: Colors.white),
						),
						flex: 1,
					),
				]
			),
        );
    }
}