import 'package:dart_lang/b_behavioral/e_visitor/exercise/document_management.dart';
import 'package:dart_lang/b_behavioral/e_visitor/exercise/presentation_file.dart';
import 'package:dart_lang/b_behavioral/e_visitor/exercise/spread_sheet_file.dart';
import 'package:dart_lang/b_behavioral/e_visitor/exercise/text_file.dart';

class WordCount implements DocuemntManagement {
  @override
  void visitPresentation(PresenationFile file) {
    print('Counting words in presentation file');
  }

  @override
  void visitSpreadsheet(Spreadsheet file) {
    print('Counting words in spreadsheet file');
  }

  @override
  void visitTextFile(TextFile file) {
    print('Counting words in text file');
  }
}
