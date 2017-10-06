import React, { Component } from 'react'
import { AppRegistry, Text, Image, View, StyleSheet, TextInput, Button, Alert, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback,TouchableHighlight, Platform,
ScrollView, FlatList, SectionList} from 'react-native'

export class HelloWorldApp extends Component {
  render() {
    return <Text>Hello world!</Text>
  }
}

export class Bananas extends Component {
  render() {
    let pic = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return <Image source={pic} style={{ width: 193, height: 127 }} />
  }
}

export class Test extends Component {
  render() {
    var num = '1'
    return (
      <View>
        <Bananas />
      </View>
    )
  }
}

export class Greeting extends Component {
  render() {
    return (
      <Text>
        Hello {this.props.dom}
        {this.props.name}!
      </Text>
    )
  }
}

export class LotsOfGreetings extends Component {
  render() {
    return (
      //in this class we calling to Greeting class and setting a key and value for this key
      //becouse the Greeting class have a return with string "hello" and this.props he take what he got
      //from Greeting which is the proprerties (in our case this is the name value)
      //
      //more specific the "this.props.name" prefer to key named "name", after he found the key he take the value of this key and display it
      <View>
        <Greeting dom="Guy2" />
        <Greeting dom="Jaina" />
        <Greeting dom="Valeera" />
        <Greeting name="this is more name" />
        <Greeting />
      </View>
    )
  }
}

class Blink extends Component {
  constructor(props) {
    super(props)
    this.state = { showText: true }

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText }
      })
    }, 1000)
  }

  render() {
    let display = this.state.showText ? this.props.text : ' '
    return <Text>{display}</Text>
  }
}

export class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text="I love to blink" />
        <Blink text="Yes blinking is so great" />
        <Blink text="Why did they ever take this out of HTML" />
        <Blink text="Look at me look at me look at me" />
      </View>
    )
  }
}

export class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles2.red}>just red</Text>
        <Text style={styles2.bigblue}>just bigblue</Text>
        <Text style={[styles2.bigblue]}>bigblue</Text>
        <Text style={[styles2.red]}>, then red</Text>
        <Text style={[styles2.red]}>red,</Text>
        <Text style={[styles2.bigblue]}>then bigblue</Text>
      </View>
    )
  }
}
export class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View
          style={{ width: 50, height: 50, backgroundColor: 'black' }}
        />
        <View style={{ width: 100, height: 100, backgroundColor: 'skyblue' }} />
        <View
          style={{ width: 150, height: 150, backgroundColor: 'steelblue' }}
        />
      </View>
    )
  }
}

export class FlexDimensionsBasics extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{ flex: 1  }}>
        <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
        <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
        <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
      </View>
    )
  }
}

export class FlexDirectionBasics extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

export class JustifyContentBasics extends Component {
  render() {
    return (
      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

export class AlignItemsBasics extends Component {
  render() {
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

export class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

export class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles1.container2}>
        <View style={styles1.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
        <View style={styles1.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={styles1.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="This looks great!"
          />
          <Button
            onPress={this._onPressButton}
            title="OK!"
            color="#841584"
          />
          <Button
            onPress={this._onPressButton}
            title="OK2!"
            color="#841584"
          />
          <Button
            onPress={this._onPressButton}
            title="OK3!"
            color="#841584"
          />
          <Button
            onPress={this._onPressButton}
            title="OK4!"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

export class Touchables extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback
            onPress={this._onPressButton}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback
            onPress={this._onPressButton}
            >
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
      return (
        <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}} />
          <Image source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}} />
          <Image source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}} />
          <Image source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}} />
          <Image source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}} />
          <Image source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}} />
          <Image source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}} />
          <Image source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}} />
          <Image source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}} />
          <Image source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}} />
          <Image source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}} />
          <Image source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}} />
          <Image source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}} />
          <Text style={{fontSize:96}}>What''s the best</Text>
          <Image source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}} />
          <Image source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}} />
          <Image source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}} />
          <Image source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}} />
          <Image source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}} />
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Image source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}} />
          <Image source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}} />
          <Image source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}} />
          <Image source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}} />
          <Image source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}} />
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
    );
  }
}

export class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles4.container}>
        <FlatList
          data={[
            {key: 'guy'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}


export class SectionListBasics extends Component {
  render() {
    return (
      <View style={styles5.container}>
        <SectionList
          sections={[
            {title: 'יהושע', data: ['Devin']},
            {title: 'שופטים', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles5.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles5.sectionHeader}>{section.title}</Text>}
        />
      </View>
    );
  }
}

const styles5 = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

const styles4 = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
})


const styles1 = StyleSheet.create({
  container2: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 2,
    padding:0
  },
  alternativeLayoutButtonContainer: {
    margin: 2,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})


const styles2 = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red'
  }
})
