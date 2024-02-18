import {Text, View, Modal, StyleSheet} from 'react-native';

const SMModal = (props) => {
    const { title, text, openModal, setOpenModal } = props;
  
    return (
      <View style={{ flex: 1 }}>
        <Modal animationType="slide" transparent={true} visible={openModal}>
          <View style={styles.centerView}>
            <View style={styles.modalView}>
              <Text style={styles.modalheading}>{title ? title : "Modal Heading"}</Text>
              <Text style={styles.modalText}>{text ? text : 'Modal Text Aria'}</Text>
              <View style={styles.Buttons}>
                <Text onPress={() => setOpenModal(false)} style={styles.cancelbtn}>
                  Cancel
                </Text>
                <Text style={styles.okbtn}>Ok</Text>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    paddingHorizontal: 70,
    paddingVertical: 10,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 20,
  },
  modalheading: {
    fontSize: 20,
    alignItems: 'center',
    textAlign: 'center',
  },
  modalText: {
    alignItems: 'center',
    textAlign: 'center',
    padding: 5,
  },
  Buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 20,
    gap: 20,
  },
  cancelbtn: {
    paddingHorizontal: 25,
    backgroundColor: 'black',
    color: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  okbtn: {
    paddingHorizontal: 25,
    backgroundColor: 'black',
    color: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 5,
  },
});

export default SMModal;
