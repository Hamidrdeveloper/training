import {StyleSheet} from 'react-native';
import Res from '../../../Color/color';
export default StyleSheet.create({
  matchParent: {
    width: 200,
    height: 250,
  },
  textTitle: {
    textAlign: 'right',
    fontFamily: 'BYekanBold',
    fontSize: 24,
    color: Res.Color.primers,
  },
  viewItem: {
    width: '100%',
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  date: {fontFamily: 'BYekanBold', fontSize: 11, color: Res.Color.primers},
  viewCircle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    marginTop: 5,
  },
  viewCircleII: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleTitle: {textAlign: 'center', fontFamily: 'Yekan'},
  detail: {
    textAlign: 'right',
    fontFamily: 'BYekanBold',
    fontSize: 13,
    color: '#c6c6c6',
  },
  buttonItem: {
    backgroundColor: '#333648',
    borderRadius: 30,
    width: 85,
    height: 38,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    position: 'absolute',
  },
  textButton: {
    height: '100%',
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Yekan',
    color: '#fff',
    fontSize: 10,
  },
  viewFull: {width: '100%', height: '100%'},
  imagePro: {
    width: 80,
    height: 80,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 45,
  },
  viewLine: {
    width: '100%',
    height: 40,
    elevation: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignSelf: 'center',
  },
  viewFullButton: {
    width: '100%',
    height: 55,
    marginTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    bottom: 0,
    position: 'absolute',
  },
  viewButton: {
    width: '100%',
    height: 55,
    marginRight: 15,
    marginLeft: 15,
    elevation: 5,
    backgroundColor: '#bfbfbf',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 15,
    position: 'absolute',
    bottom: 0,
    marginBottom: 25,
  },
  // eslint-disable-next-line no-dupe-keys
  textButton: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 14,
    color: '#fff',
    fontFamily: 'BYekanBold',
  },
  textInputItem: {
    width: '100%',
    height: '100%',
  },
  viewFullIem: {
    flex: 1,
    height: 55,
    marginTop: 20,
  },
  imageBottom: {
    width: '100%',
    height: '50%',
    position: 'absolute',
    bottom: 0,
  },
  buttonBack: {
    width: 25,
    height: 25,
    marginLeft: 10,
    tintColor: Res.Color.primers,
  },
  viewActivityIndicator: {
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'center',
    height: '100%',
    width: '100%',
    paddingTop:50
  },
  cardModelPop: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 15,
  },
  textHeder: {
    fontSize: 28,
    color: Res.Color.primers,
    fontFamily: 'BYekanBold',
    right: 0,
    position: 'absolute',
    paddingRight: 15,
  },
  viewHeder: {
    marginTop: 25,
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 15,
    width: '100%',
  },
  space: {
    marginTop: 15,
  },
  viewItemRow: {
    flexDirection: 'row',
    width: '100%',
  },
  viewItemRowII: {
    color: Res.Color.primers,
    fontFamily: 'BYekanBold',
    right: 0,
    fontSize: 11,
    position: 'absolute',
    paddingRight: 13,
  },
  viewItemRowIII: {
    flexDirection: 'row',
    width: '100%',
  },
  flatListStyle: {marginBottom: 60},
  viewDetail: {
    paddingLeft: 100,
    width: '100%',
  },
  imageCard: {
    width: 120,
    height: '88%',

    bottom: 0,
    tintColor: '#f8f7f9',
    borderBottomLeftRadius: 20,

    // borderBottomWidth: 7000,
    position: 'absolute',
  },
  cardButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#bfbfbf',
    borderRadius: 30,
  },
  viewCardButton: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  textCardButton: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 30,
    textAlign: 'center',

    fontSize: 12,
    padding: 8,
    fontFamily: 'BYekanBold',
    textAlignVertical: 'center',
  },
  textCardButtonGray: {
    flex: 1,
    width: '100%',
    height: '100%',
    color: '#fff',
    borderRadius: 30,
    textAlign: 'center',

    fontSize: 14,
    fontFamily: 'BYekanBold',
    textAlignVertical: 'center',
  },
  viewFullCardButton: {
    width: '100%',
    height: 50,
    position: 'absolute',
    bottom: 0,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 15,
  },
});
