import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
const axios = require('axios').default;

const ContactPostScreen = ({route}) => {
  const [postTitle, setPostTitle] = React.useState('');
  const [postBody, setPostBody] = React.useState('');

  function Event() {
    if (postTitle && postBody) {
      axios
        .post('https://jsonplaceholder.typicode.com/posts', {
          title2: postTitle,
          // body: postBody,
        })
        .then(function (response) {
          console.log("aaaaaaaaaaaaaaaaaaa:",response);

        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setPostTitle}
        placeholder="Enter Title"
        value={postTitle}
      />
      <TextInput
        style={[styles.input, {height: 100}]}
        onChangeText={setPostBody}
        value={postBody}
        placeholder="Enter post"
      />
      <TouchableOpacity onPress={Event}>
        <View style={styles.PostButton}>
          <Text style={styles.PostButtonTitle}>Enter</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ContactPostScreen;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  PostButton: {
    height: 40,
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: '#5C33CF',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#5C33CF',
    padding: 4,
    marginTop: 12,
  },
  PostButtonTitle: {
    color: 'white',
    fontSize: 24,
  },
});
