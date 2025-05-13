import * as SecureStore from "expo-secure-store";
import { Persistence } from "firebase/auth";

// Define a unique prefix for storage keys
const STORAGE_KEY_PREFIX = "firebase:authUser:";

class SecureStorePersistence implements Persistence {
  // Set the type to 'LOCAL' as required by Firebase's Persistence interface
  type: "LOCAL" = "LOCAL";

  async _isAvailable(): Promise<boolean> {
    const testKey = "__test_key__";
    try {
      // Attempt to store a test value
      await SecureStore.setItemAsync(testKey, "test");
      return true;
    } catch {
      return false;
    } finally {
      // Ensure the test key is always deleted
      await SecureStore.deleteItemAsync(testKey).catch(() => {
        // Suppress errors during cleanup
      });
    }
  }

  async _set(key: string, value: string): Promise<void> {
    await SecureStore.setItemAsync(STORAGE_KEY_PREFIX + key, value);
  }

  async _get(key: string): Promise<string | null> {
    return await SecureStore.getItemAsync(STORAGE_KEY_PREFIX + key);
  }

  async _remove(key: string): Promise<void> {
    await SecureStore.deleteItemAsync(STORAGE_KEY_PREFIX + key);
  }
}

export const secureStorePersistence = new SecureStorePersistence();