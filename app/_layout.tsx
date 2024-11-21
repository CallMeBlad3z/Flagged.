// _layout.tsx

import { View, StyleSheet } from "react-native";
import { Stack, Link } from "expo-router";
import { TouchableOpacity, Text} from "react-native";
import { SelectedCountriesProvider, useSelectedCountries } from "./components/api/SelectedCountriesContext";
import { Ionicons, AntDesign } from "@expo/vector-icons";


function HeaderSaveButton() {
  const { saveSelectedCountries } = useSelectedCountries();

  const handleSave = async () => {
    await saveSelectedCountries();
    alert('Selections saved!');
  };

  return (
    <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
      <Text style={styles.saveButtonText}>Save</Text>
    </TouchableOpacity>
  );
}

export default function RootLayout() {
  return (
      <SelectedCountriesProvider>
        <Stack>
          <Stack.Screen 
            name="index" 
            options={{
              title: 'Flagged.',
              headerTitleStyle: {
                fontFamily: 'BonaNova-Bold',
                fontSize: 24,
              },
              headerRight: () => (
                <View style={styles.navbar}>
                  <Link style={styles.navLink} href="/settings">
                    <View style={styles.iconWrapper}>
                      <Ionicons name="settings" size={24} color="black" />
                    </View>
                  </Link>
                  <Link style={styles.navLink} href="countrylist">
                    <View style={styles.iconWrapper}>
                      <AntDesign name="plus" size={24} color="black" />
                    </View>
                  </Link>
                </View>
              ),
            }} 
          />
          <Stack.Screen 
            name="settings" 
            options={{
              title: 'Settings',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontFamily: 'BonaNova-Bold',
                fontSize: 24,
              },
              }}
            />
          <Stack.Screen
            name="countrylist"
            options={{
              title: 'Country List',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontFamily: 'BonaNova-Bold',
                fontSize: 24,
              },
              headerRight: () => <HeaderSaveButton />,
            }}
          />
        </Stack>
      </SelectedCountriesProvider>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  navLink: {
    marginLeft: 15,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
  saveButton: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
  },
  saveButtonText: {
    color: '#000000',
    fontSize: 18,
    fontFamily: 'SourceSans3-Bold',
  },
});