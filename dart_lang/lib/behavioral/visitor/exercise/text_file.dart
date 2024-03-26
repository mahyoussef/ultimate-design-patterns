import 'package:Strategy_design/behavioral/visitor/exercise/document_management.dart';
import 'package:Strategy_design/behavioral/visitor/exercise/document_management_visitor.dart';

class TextFile implements DocumentTypesVisitor {
  @override
  void accept(DocuemntManagement visitor) {
    visitor.visitTextFile(this);
  }
}
