export const TEACHER_ALL_ACTIONS_TYPE = {
  GET_TEACHER: "GET-TEACHER",
  GET_ACTIVE_TEACHER: "GET_ACTIVE_TEACHER",
  CREATE_TEACHER: "CREATE-TEACHER",
  GET_TEACHER_PAGINATION: "GET_TEACHER_PAGINATION",
  UPDATE_TEACHER: "UPDATE-TEACHER",
  DELETE_TEACHER: "DELETE-TEACHER",
  TEACHER_MODAL: "TEACHER-MODAL",
  TEACHER_LOADING: "TEAHCER_LOADING",
  GET_TEACHER_LAST_PAGE: "GET_TEACHER_LAST_PAGE",

  GET_LESSON_STATISTICS: "GET_LESSON_STATISTICS",
  GET_CONFIRMED_LESSONS: "GET_CONFIRMED_LESSONS",
  GET_CANCELLED_LESSONS: "GET_CANCELLED_LESSONS",
  GET_UNVIEWED_LESSONS: "GET_UNVIEWED_LESSONS",
  GET_LEADERBOARD_ORDER: "GET_LEADERBOARD_ORDER",
};

export const ADMIN_ALL_ACTIONS_TYPE = {
  GET_ADMIN: "GET-ADMIN",
  CREATE_ADMIN: "CREATE-ADMIN",
  GET_ADMIN_PAGINATION: "GET_ADMIN_PAGINATION",
  UPDATE_ADMIN: "UPDATE-ADMIN",
  DELETE_ADMIN: "DELETE-ADMIN",
  ADMIN_MODAL: "ADMIN-MODAL",
  ADMIN_LOADING: "ADMIN_LOADING",
  GET_ADMIN_LAST_PAGE: "GET_ADMIN_LAST_PAGE",
};

export const COURSES_ALL_ACTIONS_TYPE = {
  GET_COURSE: "GET-COURSE",
  CREATE_COURSE: "CREATE-COURSE",
  UPDATE_COURSE: "UPDATE-COURSE",
  DELETE_COURSE: "DELETE-COURSE",
  COURSE_MODAL: "COURSE-MODAL",
  GET_COURSES_PAGINATION: "GET_COURSES_PAGINATION",
  COURSE_LOADING: "COURSE_LOADING",
  GET_COURSES_LAST_PAGE: "GET_COURSES_LAST_PAGE",
};

export const ALL_COURSES_ACTION = {
  GET_ALL_COURSE: "GET_ALL_COURSE",
};

export const STUDENTS_ALL_ACTIONS_TYPE = {
  GET_STUDENT: "GET-STUDENT",
  GET_STUDENT_PAGINATION: "GET_STUDENT_PAGINATION",
  CREATE_STUDENT: "CREATE-STUDENT",
  UPDATE_STUDENT: "UPDATE-STUDENT",
  DELETE_STUDENT: "DELETE-STUDENT",
  STUDENT_MODAL: "STUDENT-MODAL",
  GET_STUDENT_BY_COURSE: "GET-STUDENT-BY-COURSE",
  GET_MORE_STUDENT_BY_COURSE: "GET-MORE-STUDENT-BY-COURSE",
  STUDENT_LOADING: "STUDENT_LOADING",
  GET_STUDENT_LAST_PAGE: "GET_STUDENT_LAST_PAGE",
};

export const AUTH_ALL_ACTION_TYPE = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  AUTH_LOADING: "AUTH_LOADING",
};

export const CHANGE_PASSPWORD_ACTION_TYPE = {
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
  START_LOADING: "START_LOADING",
};
export const TABLE_ALL_ACTION_TYPE = {
  GET_DATA: "GET-DATA",
  CREATE_DATA: "CREATE-DATA",
  UPDATE_DATA: "UPDATE-DATA",
  DELETE_DATA: "DELETE-DATA",
};
export const TABLE_COLUMN_ACTION_TYPE = {
  GET_COLUMN: "GET-COLUMN",
};

export const SALARY_ACTION_TYPE = {
  GET_SALARY: "GET-SALARY",
  GET_SALARY_PAGINATION: "GET_SALARY_PAGINATION",
  GET_TEACHER_SALARY_PAGINATION: "GET_TEACHER_SALARY_PAGINATION",
  CLEAR_SALARY: "CLEAR-SALARY",
  SALARY_LOADING: "SALARY_LOADING",
};

export const DATEPICKER_ACTION_TYPE = {
  START_DATE: "UPDATE-DATE",
  END_DATE: "END-DATE",
  GET_DATE: "GET-DATE",
};

export const MAIN_LESSONS_DATA_ACTION_TYPE = {
  GET_MAIN_LESSONS_DATA: "GET-MAIN_LESSONS_DATA",
  CREATE_MAIN_LESSONS_DATA: "CREATE-MAIN_LESSONS_DATA",
  DELETE_MAIN_LESSONS_DATA: "DELETE-MAIN_LESSONS_DATA",
  UPDATE_MAIN_LESSONS_DATA: "UPDATE-MAIN_LESSONS_DATA",
};

export const CURRENT_LESSONS_DATA_ACTION_TYPE = {
  GET_CURRENT_LESSONS_DATA: "GET-CURRENT_LESSONS_DATA",
  CREATE_CURRENT_LESSONS_DATA: "CREATE-CURRENT_LESSONS_DATA",
  DELETE_CURRENT_LESSONS_DATA: "DELETE-CURRENT_LESSONS_DATA",
  UPDATE_CURRENT_LESSONS_DATA: "UPDATE-CURRENT_LESSONS_DATA",
  COPY_MAIN_CURRENT: "COPY-MAIN-CURRENT",
  COPY_MAIN_CURRENT_BUTTON: "COPY_MAIN_CURRENT_BUTTON",
  UPDATE_OPEN_MODAL: "UPDATE_OPEN_MODAL",
};

export const NOTIFICATION_ACTION_TYPE = {
  GET_NOTIFICATION: "GET-NOTIFICATION",
  CREATE_NOTIFICATION: "CREATE-NOTIFICATION",
  UPDATE_NOTIFICATION: "UPDATE-NOTIFICATION",
  VIEWED_NOTIFICATION: "VIEWED-NOTIFICATION",
  NOTIFICATION_LOADING: "NOTIFICATION_LOADING",
};

export const STATUS_ACTION_TYPE = {
  UPDATE_STATUS: "UPDATE-STATUS",
};

export const MODAL_LESSON_ACTION_TYPE = {
  SET_MODAL_LESSON: "SET_MODAL_LESSON",
  LESSON_MODAL_LOADING: "LESSON_MODAL_LOADING",
  LESSON_DELETE_MODAL_LOADING: "LESSON_DELETE_MODAL_LOADING",
};

export const DROPDOWN_NAME_ACTION_TYPE = {
  GET_DROPDOWN: "GET-DROPDOWN",
};

export const DROPDOWN_ERROR_TYPE = {
  GET_DROPDOWN_ERROR: "GET_DROPDOWN_ERROR",
};

export const LESSON_STATUS_ACTION_TYPE = {
  UPDATE_LESSON_STATUS: "UPDATE_LESSON_STATUS",
};

export const TABLE_TYPE_ACTION_TYPE = {
  GET_TABLE_TYPE: "GET-TABLE-TYPE",
};

export const MAIN_PAGE_TYPE_ACTION_TYPE = {
  GET_MAIN_PAGE_TYPE: "GET-MAIN-PAGE-TYPE",
};

export const STUDENT_ATTENDACE_ACTION_TYPE = {
  GET_STUDENT_ATTENDANCE_TYPE: "GET-STUDENT-ATTENDACE-TYPE",
};

export const INVALID_TOKEN_ACTION_TYPE = {
  GET_INVALID_TOKEN: "GET-INVALID-TOKEN",
};

export const MAINPAGE_LESSONS_ACTION_TYPE = {
  GET_MAINPAGE_LESSONS: "GET-MAINPAGE-LESSONS",
  UPDATE_MAINPAGE_LESSONS: "UPDATE-MAINPAGE-LESSONS",
  /* temporary table */
  CREATE_TEMPORARY_LESSONS: "CREATE-TEMPORARY-LESSONS",
  UPDATE_TEMPORARY_LESSONS: "UPDATE-TEMPORARY-LESSONS",
  DELETE_TEMPORARY_LESSONS: "DELETE-TEMPORARY-LESSONS",
};

export const FULLED_CELLS_ACTION_TYPE = {
  GET_FULLED_CELLS: "GET_FULLED_CELLS",
  UPDATE_FULLED_CELLS: "UPDATE_FULLED_CELLS",
};

export const USER_ACTION_TYPE = {
  ADD_USER: "ADD-USER",
  UPDATE_IMAGE: "UPDATE-IMAGE",
  GET_IMAGE: "GET-IMAGE",
  LOADING: "LOADING",
  ERROR: "ERROR",
};

export const SHOWNAV_ACTION_TYPE = {
  SHOW: "SHOW",
};

export const WEEKS_BETWEEN_SELECTED_DATES_ACTION_TYPE = {
  GET_SELECTED_DATES: "GET-SELECTED-DATES",
};

export const PAGINATION_PAGE_NUMBER_ACTION_TYPE = {
  GET_PAGE_NUMBER: "GET-PAGE-NUMBER",
  UPDATE_PAGE_NUMBER: "UPDATE-PAGE-NUMBER",
};

export const SEARCH_VALUES_ACTION_TYPES = {
  TEACHERS_SEARCH_VALUE: "TEAHCERS_SEARCH_VALUE",
  ADMINS_SEARCH_VALUE: "ADMINS_SEARCH_VALUE",
  STUDENTS_SEARCH_VALUE: "STUDENTS_SEARCH_VALUE",
  COURSES_SEARCH_VALUE: "COURSES_SEARCH_VALUE",
  SALARIES_SEARCH_VALUE: "SALARIES_SEARCH_VALUE",
  EXPENSES_SEARCH_VALUE: "EXPENSES_SEARCH_VALUE",
  BONUS_SEARCH_VALUE: "BONUS_SEARCH_VALUE",
  FINE_SEARCH_VALUE: "FINE_SEARCH_VALUE",
  FEEDBACK_SEARCH_VALUE: "FEEDBACK_SEARCH_VALUE",
  STUDENT_FEEDBACK_SEARCH_VALUE: "STUDENT_FEEDBACK_SEARCH_VALUE",
};

export const DASHBOARD_ACTIONS_TYPE = {
  GET_DASHBOARD: "GET_DASHBOARD",
  GET_DASHBOARD_CONFIRMED_LESSONS: "GET_DASHBOARD_CONFIRMED_LESSONS",
  GET_DASHBOARD_CANCELLED_LESSONS: "GET_DASHBOARD_CANCELLED_LESSONS",
  GET_DASHBOARD_UNVIEWED_LESSONS: "GET_DASHBOARD_UNVIEWED_LESSONS",
  UPDATE_DASHBOARD_UNVIEWED_LESSONS: "UPDATE_DASHBOARD_UNVIEWED_LESSONS",
  GET_DASHBOARD_FINANCE: "GET_DASHBOARD_FINANCE",
  GET_DASHBOARD_COURSE_STATISTIC: "GET_DASHBOARD_COURSE_STATISTIC",
  GET_DASHBOARD_ADVERTISING: "GET_DASHBOARD_ADVERTISING",
  GET_DASHBOARD_LEADBOARD: "GET_DASHBOARD_LEADBOARD:",
  GET_DASHBOARD_STUDENTS_AMOUNT: "GET_DASHBOARD_STUDENTS_AMOUNT",
};

export const FINANCE_ACTIONS_TYPE = {
  GET_FINANCE_CHART: "GET_FINANCE_CHART",
  GET_FINANCE_DATA: "GET_FINANCE_DATA",
};

export const FORGET_PASSWORD_ACTIONS_TYPE = {
  SEND_EMAIL: "SEND_EMAIL",
  CHECKOTP: "CHECKOTP",
  UPDATE_PASSWORD: "UPDATE_PASSWORD",
  GO_TO_FORGET_PAGE: "GO_TO_FORGET_PAGE",
  FORGET_ERROR: "FORGET_ERROR",
  FORGET_LOADING: "FORGET_LOADING",
};

export const EXPENSES_ACTION_TYPE = {
  GET_EXPENSES: "GET_EXPENSES",
  CREATE_EXPENSES: "CREATE_EXPENSES",
  UPDATE_EXPENSES: "UPDATE_EXPENSES",
  DELETE_EXPENSES: "DELETE_EXPENSES",
  EXPENSES_LOADING: "EXPENSES_LOADING",
  EXPENSES_MODAL: "EXPENSES_MODAL",
  GET_EXPENSES_PAGINATION: "GET_EXPENSES_PAGINATION",
  GET_EXPENSES_LAST_PAGE: "GET_EXPENSES_LAST_PAGE",
};

export const INCOME_ACTION_TYPE = {
  GET_INCOME: "GET_INCOME",
  CREATE_INCOME: "CREATE_INCOME",
  UPDATE_INCOME: "UPDATE_INCOME",
  DELETE_INCOME: "DELETE_INCOME",
  INCOME_LOADING: "INCOME_LOADING",
  GET_INCOME_PAGINATION: "GET_INCOME_PAGINATION",
  GET_INCOME_LAST_PAGE: "GET_INCOME_LAST_PAGE",
};

export const FUNC_COMPONENT_ACTION_TYPE = {
  GET_FUNC_COMP: "GET_FUNC_COMP",
};

export const COURSES_MODAL_ACTION_TYPE = {
  GET_COURSES_MODAL: "GET_COURSES_MODAL",
  COURSE_OPEN_MODAL: "COURSE_OPEN_MODAL",
  COURSE_MODAL_LOADING: "COURSE_MODAL_LOADING",
};

export const STUDENTS_MODAL_ACTION_TYPE = {
  GET_STUDENTS_MODAL: "GET_STUDENTS_MODAL",
  STUDENT_OPEN_MODAL: "STUDENT_OPEN_MODAL",
  STUDENT_MODAL_LOADING: "STUDENT_MODAL_LOADING",
};

export const TEACHERS_MODAL_ACTION_TYPE = {
  GET_TEACHERS_MODAL: "GET_TEACHERS_MODAL",
  TEACHER_OPEN_MODAL: "TEACHER_OPEN_MODAL",
  TEACHER_MODAL_LOADING: "TEACHER_MODAL_LOADING",
};

export const ADMINS_MODAL_ACTION_TYPE = {
  GET_ADMINS_MODAL: "GET_ADMINS_MODAL",
  ADMIN_OPEN_MODAL: "ADMIN_OPEN_MODAL",
  ADMIN_MODAL_LOADING: "ADMIN_MODAL_LOADING",
};

export const EXPENSES_MODAL_ACTION_TYPE = {
  GET_EXPENSES_MODAL: "GET_EXPENSES_MODAL",
  EXPENSES_OPEN_MODAL: "EXPENSES_OPEN_MODAL",
  EXPENSES_MODAL_LOADING: "EXPENSES_MODAL_LOADING",
};
export const BONUS_MODAL_ACTION_TYPE = {
  GET_BONUS_MODAL: "GET_BONUS_MODAL",
  BONUS_MODAL_LOADING: "BONUS_MODAL_LOADING",
  BONUS_OPEN_MODAL: "BONUS_OPEN_MODAL",
};
export const FEEDBACK_MODAL_ACTION_TYPE = {
  GET_FEEDBACK_MODAL: "GET_FEEDBACK_MODAL",
};
export const FINE_MODAL_ACTION_TYPE = {
  GET_FINE_MODAL: "GET_FINE_MODAL",
  FINE_OPEN_MODAL: "FINE_OPEN_MODAL",
  FINE_MODAL_LOADING: "FINE_MODAL_LOADING",
};

export const INCOMES_MODAL_ACTION_TYPE = {
  GET_INCOMES_MODAL: "GET_INCOMES_MODAL",
  INCOMES_OPEN_MODAL: "INCOMES_OPEN_MODAL",
  INCOMES_MODAL_LOADING: "INCOMES_MODAL_LOADING",
};

export const SIDEBAR_ACTION_TYPE = {
  SIDEBAR_OPEN_MODAL: "SIDEBAR_OPEN_MODAL",
};

export const STIMULATION_PAGE_TYPE_ACTION_TYPE = {
  GET_STIMULATION_PAGE_TYPE: "GET-STIMULATION-PAGE-TYPE",
};

export const BONUS_PAGINATION_ACTION_TYPE = {
  GET_BONUS: "GET-BONUS",
  CREATE_BONUS: "CREATE_BONUS",
  UPDATE_BONUS: "UPDATE_BONUS",
  DELETE_BONUS: "DELETE_BONUS",
  BONUS_LOADING: "BONUS_LOADING",
  BONUS_MODAL: "BONUS_MODAL",
  GET_BONUS_PAGINATION: "GET_BONUS_PAGINATION",
  GET_BONUS_LAST_PAGE: "GET_BONUS_LAST_PAGE",
};

export const TEACHER_BONUS_ACTION_TYPE = {
  GET_TEACHER_BONUS: "GET_TEACHER_BONUS",
  GET_TEACHER_FINE: "GET_TEACHER_FINE",
};

export const FINE_PAGINATION_ACTION_TYPE = {
  GET_FINE: "GET-FINE",
  CREATE_FINE: "CREATE_FINE",
  UPDATE_FINE: "UPDATE_FINE",
  DELETE_FINE: "DELETE_FINE",
  FINE_LOADING: "FINE_LOADING",
  FINE_MODAL: "FINE_MODAL",
  GET_FINE_PAGINATION: "GET_FINE_PAGINATION",
  GET_FINE_LAST_PAGE: "GET_FINE_LAST_PAGE",
};

export const FEEDBACK_PAGE_TYPE_ACTION_TYPE = {
  GET_FEEDBACK_PAGE_TYPE: "GET-FEEDBACK-PAGE-TYPE",
};

export const FEEDBACK_PAGINATION_ACTION_TYPE = {
  GET_FEEDBACK: "GET_FEEDBACK",
  GET_FEEDBACK_LAST_PAGE: "GET_FEEDBACK_LAST_PAGE",
  DELETE_FEEDBACK: "DELETE_FEEDBACK:",
  FEEDBACK_LOADING: "FEEDBACK_LOADING",
};

export const FEEDBACKS_BY_TEACHER_ACTION_TYPE = {
  GET_FEEDBACKS_BT_TEACHER: "GET_FEEDBACKS_BT_TEACHER",
  CREATE_FEEDBACKS_BT_TEACHER: " CREATE_FEEDBACKS_BT_TEACHER",
  UPDATE_FEEDBACKS_BT_TEACHER: " UPDATE_FEEDBACKS_BT_TEACHER",
  DELETE_FEEDBACKS_BT_TEACHER: "DELETE_FEEDBACKS_BT_TEACHER",
};

export const FINANCE_FILTER_ACTION_TYPE = {
  GET_CHOOSE_DATE_FILTER: "GET_CHOOSE_DATE_FILTER",
  GET_MONTHS_FILTER: "GET_MONTHS_FILTER",

  GET_INCOME_CATEGORY_FILTER: "GET_INCOME_CATEGORY_FILTER",
  GET_INCOME_SORTING_FILTER: "GET_INCOME_SORTING_FILTER",

  GET_EXPENSE_CATEGORY_FILTER: "GET_EXPENSE_CATEGORY_FILTER",
  GET_EXPENSE_SORTING_FILTER: "GET_EXPENSE_SORTING_FILTER",

  CLEAR_MONTHS_FILTER: "CLEAR_MONTHS_FILTER",
  CLEAR_CHOOSE_DATE_FILTER: "CLEAR_CHOOSE_DATE_FILTER",
};

export const FINE_FILTER_ACTION_TYPE = {
  GET_FINE_CATEGORY: "GET_FINE_CATEGORY",
};

export const TEACHER_STATUS_FILTER_ACTION_TYPE = {
  GET_TEACHER_STATUS: "GET_TEACHER_STATUS",
};

export const STUDENT_STATUS_FILTER_ACTION_TYPE = {
  GET_STUDENT_STATUS: "GET_STUDENT_STATUS",
};
export const LESSON_TABLE_MODAL_ACTION_TYPE = {
  GET_LESSON_TABLE_MODAL: "GET_LESSON_TABLE_MODAL",
};

//  corner

export const TABLES_ACTION_TYPE = {
  GET_TABLES: "GET_TABLES",
  CREATE_TABLES: "CREATE_TABLES",
  DELETE_TABLES:"DELETE_TABLES",
  UPDATE_TABLES:"UPDATE_TABLES",
  TABLES_LOADING:"TABLES_LOADING",
  GET_TABLES_LAST_PAGE:"GET_TABLES_LAST_PAGE"
};

export const TABLES_M0DAL_ACTION_TYPE = {
  GET_TABLES_MODAL: "GET_TABLES_MODAL",
  TABLES_OPEN_MODAL: "TABLES_OPEN_MODAL",
  TABLES_MODAL_LOADING:"TABLES_MODAL_LOADING"
 
};

export const WAREHOUSE_ACTION_TYPE={
  GET_WAREHOUSE:"GET_WAREHOUSE",
  CREATE_WAREHOUSE:"CREATE_WAREHOUSE",
  UPDATE_WAREHOUSE:"UPDATE_WAREHOUSE",
  DELETE_WAREHOUSE:"DELETE_WAREHOUSE",
  WAREHOUSE_LOADING:"WAREHOUSE_LOADING",
  GET_WAREHOUSE_LAST_PAGE:"GET_WAREHOUSE_LAST_PAGE"
}

export const WAREHOUSE_M0DAL_ACTION_TYPE = {
  GET_WAREHOUSE_MODAL: "GET_WAREHOUSE_MODAL",
  WAREHOUSE_OPEN_MODAL: "WAREHOUSE_OPEN_MODAL",
  WAREHOUSE_MODAL_LOADING:"WAREHOUSE_MODAL_LOADING"
 
};

export const MENU_ACTION_TYPE={
  GET_MENU:"GET_MENU",
  CREATE_MENU:"CREATE_MENU",
  UPDATE_MENU:"UPDATE_MENU",
  DELETE_MENU:"DELETE_MENU",
  MENU_LOADING:"MENU_LOADING",
  GET_MENU_LAST_PAGE:"GET_MENU_LAST_PAGE"
}

export const MENU_M0DAL_ACTION_TYPE = {
  GET_MENU_MODAL: "GET_MENU_MODAL",
  MENU_OPEN_MODAL: "MENU_OPEN_MODAL",
  MENU_MODAL_LOADING:"MENU_MODAL_LOADING"
 
};


export const CATEGORY_ACTION_TYPE={
  GET_CATEGORY:"GET_CATEGORY",
  CREATE_CATEGORY:"CREATE_CATEGORY",
  UPDATE_CATEGORY:"UPDATE_CATEGORY",
  DELETE_CATEGORY:"DELETE_CATEGORY",
  CATEGORY_LOADING:"CATEGORY_LOADING",
  GET_CATEGORY_LAST_PAGE:"GET_CATEGORY_LAST_PAGE"
}

export const CATEGORY_M0DAL_ACTION_TYPE = {
  GET_CATEGORY_MODAL: "GET_CATEGORY_MODAL",
  CATEGORY_OPEN_MODAL: "CATEGORY_OPEN_MODAL",
  CATEGORY_MODAL_LOADING:"CATEGORY_MODAL_LOADING"
 
};


export const USER_AUTH_ACTION_TYPE = {
  GET_ACCESS_CODE :"GET_ACCESS_CODE",
  CREATE_ACCESS_CODE:"CREATE_ACCESS_CODE",
  LOGIN_USER:"LOGIN_USER",
  USER_AUTH_LOADING:"USER_AUTH_LOADING"
}

export const USER_M0DAL_ACTION_TYPE = {
  GET_USER_MODAL: "GET_USER_MODAL",
  USER_OPEN_MODAL: "USER_OPEN_MODAL",
  USER_MODAL_LOADING:"USER_MODAL_LOADING"
 
};
