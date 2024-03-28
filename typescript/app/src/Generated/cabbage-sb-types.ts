/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface definitions {
  flyway_schema_history: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    installed_rank: number;
    version?: string;
    description: string;
    type: string;
    script: string;
    checksum?: number;
    installed_by: string;
    installed_on: string;
    execution_time: number;
    success: boolean;
  };
  /**
   * info provided by the user
   */
  user_info: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `users.id`.<fk table='users' column='id'/>
     */
    uuid: string;
    /**
     * unicode characters, not bytes
     */
    display_name?: string;
  };
  /**
   * data for the welcome screen
   */
  welcome: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    value: number;
  };
}