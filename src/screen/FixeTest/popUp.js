/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  PermissionsAndroid,
} from 'react-native';

import Res from '../../Color/color';
import ImagePicker from 'react-native-image-picker';

import {Card, Modal} from 'react-native-paper';
import Carousel, {getInputRangeFromIndexes} from 'react-native-snap-carousel';
import background from '../../../assets/images/abstract.png';
import PropTypes from 'prop-types';

import backgroundC from '../../../assets/images/abstract2.png';
import back from '../../../assets/images/back.png';
import circle from '../../../assets/images/circaleBack.png';
import style from '../Home/Style/style';
import {FlatList} from 'react-native-gesture-handler';
import Fixed from '../FixeTest/FixeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Recorder from '../../components/recorderPlayer';
import Player from '../../components/Player';
import FixAction from '../../action/FixAction';
import DATA from '../../model/Data';
let screenWidth = Dimensions.get('window').width;
class PopUp extends React.Component {
  state = {
    isModalVisible: false,
    isModalPlayer: false,
    voice: '',
    answerText: '',
    SumSbjId: 0,
    questionId: '',
    teacherId: '',
    SumObjId: 0,
    voiceFileName: 'test',
    imageFileName: 'test',
  };
  componentDidMount() {
    let {dataPro} = this.props;

    this.setState({
      questionId: dataPro.Id,
    });
  }
  _requestQuestion = e => {
    let {
      answerText,
      SumSbjId,
      questionId,
      teacherId,
      SumObjId,
      voiceFileName,
      imageFileName,
    } = this.state;
    FixAction._onPostSaveReserved(48, questionId);
    // FixAction._onPostInsertAnswer(
    //   answerText,
    //   SumSbjId,
    //   questionId,
    //   48,
    //   SumObjId,
    // ).then(data => {
    //   console.log('answerId', data.answerId);
    //   FixAction._onPostAnswerUpload(
    //     data.answerId,
    //     DATA.file.image,
    //     DATA.file.voice,
    //   ).then(data => {
    //     FixAction._onPstSetAnswerFilePath2(
    //       voiceFileName,
    //       imageFileName,
    //       questionId,
    //       48,
    //     ).then(data => {
    //       this.setState({
    //         isModalVisible: false,
    //       });
    //     });
    //   });
    // });
  };

  _openScreen() {
    let {navigation} = this.props;
    navigation.navigate('Home');
  }
  _ShowModalPlyer = e => {
    var voice = [
      {
        title: 'Stressed Out',
        artist: 'Twenty One Pilots',
        albumArtUrl:
          'http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg',
        audioUrl: e,
      },
    ];
    this.setState({
      voice: voice,
      isModalPlayer: !this.state.isModalPlayer,
    });
  };
  _hideModalPlyer = () => {
    this.setState({
      isModalPlayer: !this.state.isModalPlayer,
    });
  };
  _hideModalMenu = () => {
    this.props.changeState(false);
  };
  onShowImage = e => {
    this.props.navigation.navigate('FullScreenImage', {
      dataList: e,
    });
  };
  onImagePicker = () => {
    const options = {
      title: 'فایل را انخاب کنید',
      takePhotoButtonTitle: 'عکس گرفتن',
      chooseFromLibraryButtonTitle: 'انتخاب از گالری',
      cancelButtonTitle: 'لغو',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('Response = ', source);
        DATA.file.image = response;
      }
    });
  };
  onRecord = e => {
    this.setState({
      isModalVisible: true,
    });
  };
  _hideTabBar = e => {
    this.setState({
      isModalVisible: false,
    });
  };

  render() {
    let {
      textTitlePopUp,
      datePopUp,
      viewItem,
      viewCircleII,
      circleTitle,
      detail,
      buttonItem,
      textButton,
      viewItemRow,
      viewItemRowIcon,
      viewItemRowIII,
      viewDetail,
      imageCard,
    } = style;
    let {dataPro} = this.props;

    return (
      <View
        style={{
          height: '100%',
          width: '100%',

          justifyContent: 'flex-end',
          backgroundColor: 'transparent',
          padding: 15,
        }}>
        <Card
          style={{
            width: '100%',
            borderRadius: 15,
            padding: 8,
          }}>
          <TouchableOpacity
            style={{
              width: '100%',
              height: 50,
              alignItems: 'center',

              position: 'absolute',
              top: 0,
              alignSelf: 'center',
            }}
            onPress={() => {
              this._hideModalMenu();
            }}>
            <View
              style={{
                width: 50,
                height: 4,
                borderRadius: 8,
                backgroundColor: Res.Color.grayLight,
              }}
            />
          </TouchableOpacity>

          <View style={viewItemRow}>
            <Text style={[textTitlePopUp, {fontSize: 22}]}>
              {dataPro.CrsName}
            </Text>

            <View>
              <Text style={datePopUp}>{dataPro.questionType}</Text>
              <Text style={datePopUp}>
                {dataPro.persianDate.substring(0, 10)}
              </Text>
            </View>
          </View>

          <View style={{width: '100%'}}>
            <Text style={[datePopUp, {fontSize: 13}]}>
              {dataPro.ProblemText}
            </Text>
          </View>
          <View style={[viewItemRow, {paddingLeft: 8}]}>
            <TouchableOpacity
              onPress={() => this._ShowModalPlyer(dataPro.ProblemVoicePath)}>
              <Icon name="play" size={30} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.onShowImage(dataPro.ProblemImagePath)}>
              <Icon name="file-photo-o" size={30} style={{marginLeft: 15}} />
            </TouchableOpacity>
          </View>
        </Card>
        <Card
          style={{
            height: 350,
            borderRadius: 15,
            padding: 8,
            marginTop: 8,
            alignItems: 'center',
          }}>
          <View style={viewItem}>
            <View
              style={[
                viewItemRow,
                {justifyContent: 'space-between', marginTop: 12},
              ]}>
              <TouchableOpacity
                style={{width: '50%', height: 50}}
                onPress={this._hideTabBar}>
                <View
                  style={[
                    buttonItem,
                    {width: '100%', height: 50, marginTop: 0},
                  ]}>
                  <Text style={textButton}>{'انتخاب مبحث'}</Text>
                </View>
              </TouchableOpacity>
              <View style={{width: 10}} />
              <TouchableOpacity
                style={{width: '50%', height: 50}}
                onPress={this._hideTabBar}>
                <View
                  style={[
                    buttonItem,
                    {width: '100%', height: 50, marginTop: 0},
                  ]}>
                  <Text style={textButton}>{'انتخاب فصل'}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '100%',
                height: '50%',
                position: 'absolute',
                marginTop: 83,
                borderRadius: 10,
                alignSelf: 'center',
                backgroundColor: Res.Color.grayLight,
              }}>
              <TextInput
                style={{
                  width: '100%',
                  height: '100%',
                  textAlign: 'right',
                  textAlignVertical: 'top',
                  padding: 8,
                }}
                onChangeText={e =>
                  this.setState({
                    answerText: e,
                  })
                }
              />
            </View>
            <View
              style={[
                viewItemRow,
                {
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  paddingLeft: 15,
                  paddingBottom: 15,
                  marginBottom: 15,
                },
              ]}>
              <View style={[{width: '50%', height: 50}]}>
                <View style={[viewItemRow, {paddingLeft: 8}]}>
                  <TouchableOpacity onPress={this.onRecord}>
                    <Icon name="microphone" size={30} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.onImagePicker}>
                    <Icon name="camera" size={30} style={{marginLeft: 15}} />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{width: 10}} />

              <TouchableOpacity
                style={{width: '50%', height: 50}}
                onPress={this._requestQuestion}>
                <View style={[buttonItem, {width: '100%', height: 50}]}>
                  <Text style={textButton}>{'ثبت پاسخ'}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <Modal
            style={{position: 'absolute', bottom: 0}}
            visible={this.state.isModalVisible}
            onDismiss={this._hideTabBar}>
            <View style={{width: '100%', height: '100%'}}>
              <Recorder />
            </View>
          </Modal>

          <Modal
            style={{position: 'absolute', bottom: 0}}
            visible={this.state.isModalPlayer}
            onDismiss={this._hideModalPlyer}>
            <Player tracks={this.state.voice} />
          </Modal>
        </Card>
        <TouchableOpacity
          style={{
            width: 100,
            height: 50,

            position: 'absolute',
            top: 0,
            alignSelf: 'center',
          }}
          onPress={() => {
            this._hideModalMenu();
          }}
        />
      </View>
    );
  }
  static propsType = {
    changeState: PropTypes.func,
    dataPro: PropTypes.any,
    navigation: PropTypes.any,
  };
}

export default PopUp;