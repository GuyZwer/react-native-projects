import React, { Component } from 'react'
import { AppRegistry, Text, Image, View, StyleSheet } from 'react-native'

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
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue]}>bigblue</Text>
        <Text style={[styles.red]}>, then red</Text>
        <Text style={[styles.red]}>red,</Text>
        <Text style={[styles.bigblue]}>then bigblue</Text>
      </View>
    )
  }
}
export class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View
          style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}
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
      <View style={{ flex: 1 }}>
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



const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red'
  }
})
