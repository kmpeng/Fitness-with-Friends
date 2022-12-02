// https://docs.google.com/presentation/d/1TqO_7a5kOBiqOalXSDIsClMdpLDjJMBUKznFbzBjkFQ/edit#slide=id.g18575835451_0_57
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = 'https://zhbqnswgsynkoxnwddfh.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoYnFuc3dnc3lua294bndkZGZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk5Mzg1NjcsImV4cCI6MTk4NTUxNDU2N30.a9bOC5cn2UZM_5d4d6zDlP72ibYUaUxAOf05V0Yseq8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  }
});