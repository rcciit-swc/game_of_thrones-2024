export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      event_categories: {
        Row: {
          fest_name: string | null;
          id: string;
          name: string;
          year: number | null;
        };
        Insert: {
          fest_name?: string | null;
          id?: string;
          name: string;
          year?: number | null;
        };
        Update: {
          fest_name?: string | null;
          id?: string;
          name?: string;
          year?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "event_categories_fkey";
            columns: ["year", "fest_name"];
            isOneToOne: false;
            referencedRelation: "fests";
            referencedColumns: ["year", "name"];
          },
        ];
      };
      events: {
        Row: {
          desc: string | null;
          event_category_id: string | null;
          fest_name: string;
          id: string;
          max_team_member: number;
          min_team_member: number;
          year: number;
        };
        Insert: {
          desc?: string | null;
          event_category_id?: string | null;
          fest_name: string;
          id?: string;
          max_team_member?: number;
          min_team_member?: number;
          year: number;
        };
        Update: {
          desc?: string | null;
          event_category_id?: string | null;
          fest_name?: string;
          id?: string;
          max_team_member?: number;
          min_team_member?: number;
          year?: number;
        };
        Relationships: [
          {
            foreignKeyName: "event_fkey";
            columns: ["year", "fest_name"];
            isOneToOne: false;
            referencedRelation: "fests";
            referencedColumns: ["year", "name"];
          },
          {
            foreignKeyName: "events_event_category_id_fkey";
            columns: ["event_category_id"];
            isOneToOne: false;
            referencedRelation: "event_categories";
            referencedColumns: ["id"];
          },
        ];
      };
      fests: {
        Row: {
          name: string;
          year: number;
        };
        Insert: {
          name: string;
          year: number;
        };
        Update: {
          name?: string;
          year?: number;
        };
        Relationships: [];
      };
      participations: {
        Row: {
          created_at: string;
          payment_stats: string | null;
          phone: number;
          team_id: string | null;
          team_name: string | null;
        };
        Insert: {
          created_at?: string;
          payment_stats?: string | null;
          phone?: number;
          team_id?: string | null;
          team_name?: string | null;
        };
        Update: {
          created_at?: string;
          payment_stats?: string | null;
          phone?: number;
          team_id?: string | null;
          team_name?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "participations_team_id_fkey";
            columns: ["team_id"];
            isOneToOne: false;
            referencedRelation: "teams";
            referencedColumns: ["team_id"];
          },
          {
            foreignKeyName: "participations_team_name_fkey";
            columns: ["team_name"];
            isOneToOne: true;
            referencedRelation: "teams";
            referencedColumns: ["team_name"];
          },
        ];
      };
      roles: {
        Row: {
          event_id: string | null;
          id: string;
          role: string;
        };
        Insert: {
          event_id?: string | null;
          id: string;
          role: string;
        };
        Update: {
          event_id?: string | null;
          id?: string;
          role?: string;
        };
        Relationships: [
          {
            foreignKeyName: "roles_event_id_fkey";
            columns: ["event_id"];
            isOneToOne: false;
            referencedRelation: "events";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "roles_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      teams: {
        Row: {
          created_at: string;
          event_id: string;
          team_id: string | null;
          team_lead_phone: number;
          team_name: string;
          Transaction_id: string;
          Transaction_SS_filename: string | null;
          transaction_verfied: string;
        };
        Insert: {
          created_at?: string;
          event_id: string;
          team_id?: string | null;
          team_lead_phone?: number;
          team_name: string;
          Transaction_id: string;
          Transaction_SS_filename?: string | null;
          transaction_verfied?: string;
        };
        Update: {
          created_at?: string;
          event_id?: string;
          team_id?: string | null;
          team_lead_phone?: number;
          team_name?: string;
          Transaction_id?: string;
          Transaction_SS_filename?: string | null;
          transaction_verfied?: string;
        };
        Relationships: [
          {
            foreignKeyName: "teams_event_id_fkey";
            columns: ["event_id"];
            isOneToOne: false;
            referencedRelation: "events";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "teams_team_lead_phone_fkey";
            columns: ["team_lead_phone"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["phone"];
          },
        ];
      };
      users: {
        Row: {
          college: string | null;
          email: string | null;
          id: string;
          phone: number;
          username: string;
        };
        Insert: {
          college?: string | null;
          email?: string | null;
          id: string;
          phone: number;
          username: string;
        };
        Update: {
          college?: string | null;
          email?: string | null;
          id?: string;
          phone?: number;
          username?: string;
        };
        Relationships: [
          {
            foreignKeyName: "users_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
        Database["public"]["Views"])
    ? (Database["public"]["Tables"] &
        Database["public"]["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
    ? Database["public"]["Enums"][PublicEnumNameOrOptions]
    : never;
