import * as Notifications from 'expo-notifications'
import AsyncStorage from '@react-native-async-storage/async-storage'

const NOTIFICATION_KEY = 'Flashcards:notifications'

export async function requestPermissionsAsync() {
    return await Notifications.requestPermissionsAsync({
      ios: {
        allowAlert: true,
        allowBadge: true,
        allowSound: true,
        allowAnnouncements: true,
      },
    });
  }

  export async function allowsNotificationsAsync() {
    const settings = await Notifications.getPermissionsAsync();
    return (
       settings.ios.status === Notifications.IosAuthorizationStatus.PROVISIONAL ||
       settings.ios.status === Notifications.IosAuthorizationStatus.AUTHORIZED
    );
  }

  export async function clearNotifications() {
    await AsyncStorage.removeItem(NOTIFICATION_KEY)
    return Notifications.cancelAllScheduledNotificationsAsync()
  }

export function createNotification() {

    const trigger = new Date()
    trigger.setDate(trigger.getDate() + 1)
    trigger.setHours(24)
    trigger.setMinutes(0)

    return (
        Notifications.scheduleNotificationAsync({
            content: {
              title: "Don't Forget to Study!",
              body: "You haven't studied yet today, dont forget to take a quiz!",
            },
            trigger,
          })
    )
}
